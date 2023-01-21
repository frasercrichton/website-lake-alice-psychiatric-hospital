import React, { useState, useEffect, CSSProperties } from 'react'
import './App.css'
import { InView, useInView } from 'react-intersection-observer'

function Card ({ setCameraName, item, index }) {
  
  const { ref, inView, entry } = useInView({
    // key: index,
    threshold: 0.5,
    initialInView: false,

    onChange: (inView, ref, entry) => {
      if (inView) {
        setCameraName(item.camera.name)
      }
    }
  })

  const defaultStyle: CSSProperties = {
    height: '101vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d1176',
    color: '#fff'
  }
  return (
    <>
      <div key={('x-', index)} ref={ref} className='inview-block'>
        tracking <strong>{inView.toString()}</strong>
      </div>

      <div key={index} style={{ ...defaultStyle }} className='content-block'>
        XXXX : {item.camera.name}
      </div>
    </>
  )
}

export default Card
