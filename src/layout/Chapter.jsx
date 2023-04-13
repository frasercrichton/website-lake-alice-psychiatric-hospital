import React, { useEffect, useRef } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import Page from './Page.jsx'
import './Chapter.css'

// Note: There's some weirdness in here around browsers on Windows not triggering
// the step unless the offset is within the window and the last step is sized
// in pixels to force it's height

const Chapter = ({
  chapterInView,
  nextChapter,
  pageInView,
  setPageInView,
  setNextChapter,
  pageScrollProgress,
  updateStepProgress,
  hasPageReset,
  setHasPageReset
}) => {
  const scroller = useRef(null)

  useEffect(() => {
    // for every new chapter scroll to the start of the page
    if (hasPageReset) {
      scroller.current.scrollIntoView()
      setHasPageReset(false)
    }
  }, [hasPageReset, setHasPageReset])

  const onStepEnter = ({ data }) => {
    // when the scroller hits the last step (data='-1') it moves to the next chapter
    if (nextChapter && data === -1) {
      setNextChapter(nextChapter)
      setHasPageReset(true)
      return
    }
    // a very hacky way of dealing with the intro page
    // there are 2 intro pages so the scroll is slow and smooth
    const index = data <= 2 ? 1 : data - 1
    setPageInView({ index, ...chapterInView.pages[data] })
  }

  const onStepExit = ({ direction, data }) => {
  }

  const onStepProgress = ({ progress }) => {
    if (pageInView?.text?.style === 'animated') {
      updateStepProgress(progress)
    }
  }

  return (
    <div className='scroller'>
      <Scrollama
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        onStepProgress={onStepProgress}
        progress
        offset='0.90' // see note at top
      >
        {chapterInView.pages.map((page, index) => {
          return (
            <Step data={index} key={index}>
              <div
                key={`container-${chapterInView.key}-${page.id}`}
                className='page-container'
              >
                {index === 0 && <div ref={scroller} />}
                <Page
                  key={page.id}
                  page={page}
                  stepProgress={pageScrollProgress}
                  pageInView={pageInView}
                  isIntroduction={index === 0}
                />
              </div>
            </Step>
          )
        })}
        {nextChapter && (
          <Step data={-1} key={-1}>
            <div style={{ height: '200px' }}></div> 
            {/* see note at top */}
          </Step>
        )}
      </Scrollama>
    </div>
  )
}

export default Chapter
