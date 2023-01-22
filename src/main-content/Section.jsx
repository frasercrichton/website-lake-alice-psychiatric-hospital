import React, { useState, useEffect, CSSProperties } from 'react'
import './Section.css'
import { InView, useInView } from 'react-intersection-observer'

function Section ({ setCamera, item, index }) {
  const { ref, inView, entry } = useInView({
    // key: index,
    threshold: 0.5,
    initialInView: false,

    onChange: (inView, ref, entry) => {
      if (inView) {
        setCamera(item.camera)
      }
    }
  })

  const defaultStyle: CSSProperties = {
    verticalAlign: 'top',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2d1176',
    color: '#fff'
  }
  return (
    <div style={{ height: '101vh' }}>
      <div key={('x-', index)} ref={ref} className='inview-block'>
        x
      </div>
      <div key={index} style={{ ...defaultStyle }} className='content-block'>
        <div>{item.header}</div>
        <div style={{ width: '50%' }}>
          {item.text}
        </div>
      </div>
    </div>
  )
}

export default Section
