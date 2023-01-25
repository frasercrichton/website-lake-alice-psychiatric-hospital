import React, { useState, useEffect, CSSProperties } from 'react'
import './Page.css'
import { InView, useInView } from 'react-intersection-observer'
import Image from '../components/Image.jsx'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation'
const transformImageUri = input =>
  /^https?:/.test(input) ? input : `${CDN_URL}${FOLDER}/${input}`

const Page = ({ setSectionInView, setCamera, item, index }) => {
  const { ref, inView, entry } = useInView({
    // key: index,
    threshold: 0.5,
    initialInView: false,

    onChange: (inView, ref, entry) => {
      if (inView) {
        setSectionInView(item)
      }
    }
  })
  const img = item.image ? transformImageUri(item.image.src) : null

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
    <div key={`container-${item.id}`} style={{ height: '101vh' }}>
      <div key={`inview-block-${item.id}`} ref={ref} className='inview-block'>
      </div>
      <div key={index} style={{ ...defaultStyle }} className='content-block'>
        <div key={`header-block-${item.id}`} style={{ color: 'black' }}>{item.header}</div>
        <div key={`text-block-${item.id}`} style={{ width: '50%', color: 'black' }}>{item.text}</div>
        <div key={`image-block-${item.id}`}>
          {img != null && <Image caption={item.image.caption} url={img} />}
        </div>
      </div>
    </div>
  )
}

export default Page
