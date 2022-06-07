import React from 'react'
import './Image.css'

const Image = ({ caption, imageAction, id, thumbnail, url }) => {
  const imageSize = thumbnail ? '320px' : '500px'

  return (
    <div className='side-bar-menu'>
      <div>
        <img
          className='image'
          src={url}
          width={imageSize}
          alt={caption}
          onClick={e => imageAction(id)}
        />
      </div>
      {caption !== undefined && <div className='caption'>Caption: {caption}</div>}
    </div>
  )
}

export default Image
