import React, { useEffect, useRef } from 'react'
import Page from './Page.jsx'
import './Chapter.css'
const Chapter = ({ chapter, setPageInView, nextChapter, setNextChapter }) => {
  const pages = useRef([])

  useEffect(() => {
    // for every new chapter scroll to the start of the page
    pages.current[0].scrollIntoView()
  }, [chapter])

  //TODO update to forward ref
  return (
    <div className='scroller'>
      {chapter.pages.map((page, index) => {
        const nextX = index + 1 === chapter.pages.length ? nextChapter : null
        return (
          <div
            key={`container-${chapter.key}-${page.id}`}
            ref={element => (pages.current[index] = element)}
            className='page-container'
          >
            <Page
              // ref={element => (pages.current[index] = element)}
              key={page.id}
              setPageInView={setPageInView}
              page={page}
              nextChapter={nextX}
              setNextChapter={setNextChapter}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Chapter
