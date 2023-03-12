import React, { useEffect, useRef } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import Page from './Page.jsx'
import './Chapter.css'

const Chapter = ({
  chapterInView,
  nextChapter,
  pageInView,
  setPageInView,
  setNextChapter,
  pageScrollProgress,
  updateStepProgress
}) => {
  const scroller = useRef(null)

  useEffect(() => {
    console.log(pageScrollProgress)
    // for every new chapter scroll to the start of the page
    scroller.current.scrollIntoView()
  }, [chapterInView])

  const onStepEnter = ({ data }) => {
    if (nextChapter && data === -1) {
      setNextChapter(nextChapter)
      return
    }
    // a very hacky way of dealing with the intro page
    // there are 2 intro pages so the scroll is slow and smooth
    const index = data <= 2 ? 1 : data - 1
    setPageInView({ index, ...chapterInView.pages[data] })
  }

  const onStepExit = ({ direction, data }) => {
    // {
    //   element, // The DOM node of the step that was triggered
    //   data, // The data supplied to the step
    //   direction, // 'up' or 'down'
    //   entry, // the original `IntersectionObserver` entry
    // }
    // && data === this.state.steps[0]
    // if (direction === 'up') {
    //   setCurrentStepIndex({ data: 0 })
    // }
  }

  const onStepProgress = ({ progress }) => {
    updateStepProgress(progress)
  }

  return (
    <div ref={scroller} className='scroller'>
      <Scrollama
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        progress
        onStepProgress={onStepProgress}
        offset='1'
        debug
      >
        {chapterInView.pages.map((page, index) => {
          return (
            <Step data={index} key={index}>
              <div
                key={`container-${chapterInView.key}-${page.id}`}
                className='page-container'
              >
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
            <div style={{ height: '1%' }}> end</div>
          </Step>
        )}
      </Scrollama>
    </div>
  )
}

export default Chapter
