import React, { useState } from 'react'
import Loader from './Loader.jsx'
import './Image.css'

const Image = ({ caption = '', imageAction, id, url }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoading = e => {
    setIsLoaded(!isLoaded)
  }

  return (
    <div className='image-container'>
      <figure className='figure'>
        <img
          src={url}
          // width={imageSize}
          alt={caption}
          onClick={e => imageAction(id)}
          onLoad={e => handleLoading(true)}
        />
        {caption !== '' && (
          <figcaption className='caption'>{caption}</figcaption>
        )}
        {!isLoaded && <Loader />}
      </figure>
    </div>
  )
}

export default Image
