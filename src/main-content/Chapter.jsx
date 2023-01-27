import React, { useState, useEffect, CSSProperties } from 'react'
import Page from './Page.jsx'
import './Chapter.css'
const Chapter = ({ chapter, setPageInView }) => {
  return (
    <div className='scroller'>
      {chapter.pages.map((item, index) => {
        return <Page key={item.id} setPageInView={setPageInView} item={item} index />
      })}
    </div>
  )
}

export default Chapter
