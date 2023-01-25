import React, { useState, useEffect, CSSProperties } from 'react'
import Page from './Page.jsx'
import './Chapters.css'
const Chapters = ({ chapters, setSectionInView }) => {
  const chaptersX = () => {
    return chapters.slides.map((item, index) => {
      return <Page setSectionInView={setSectionInView} item={item} index />
    })
  }

  return <div className="scroller">{chaptersX()}</div>
}

export default Chapters
