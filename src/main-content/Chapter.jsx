import React, { useState, useEffect, useRef, CSSProperties } from 'react'
import Page from './Page.jsx'
import './Chapter.css'
const Chapter = ({ chapter, setPageInView }) => {
  const pages = useRef([])

  useEffect(() => {
    console.log(pages)
    // for every new chapter scroll to the start of the page
    pages.current[0].scrollIntoView()
  }, [chapter])

  return (
    <div className='scroller'>
      {chapter.pages.map((page, index) => {
        return (
          <div
            ref={element => (pages.current[index] = element)}
            className='page-container'
            key={`container-${page.id}`}
            style={{ height: '101vh', alignItems: 'center' }}
          >
            <Page
              // ref={element => (pages.current[index] = element)}
              key={page.id}
              setPageInView={setPageInView}
              page={page}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Chapter
