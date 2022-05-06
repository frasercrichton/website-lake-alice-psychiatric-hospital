import React from 'react'
import './Image.css'

const Image = ({ url, caption }) => {
  return (
    <div className='side-bar-menu'>
      <div>
        <img src={url} width='320px' alt={caption} />
      </div>
      <div className='caption'>Caption: {caption}</div>
    </div>
  )
}

export default Image
