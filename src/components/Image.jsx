import React, { useState } from 'react'
import Loader from './Loader.jsx'
import './Image.css'

const Image = ({ caption = '', src, source, id }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoading = isLoaded => {
    setIsLoaded(isLoaded)
  }

  return (
    <div className='image-container'>
      <figure className='figure'>
        <img src={src} alt={caption} onLoad={e => handleLoading(true)} />
        {caption !== '' && (
          <figcaption className='caption'>{caption}</figcaption>
        )}
        {/* {!isLoaded && <Loader />} */}
        {source && (
          <div className='source'>
            <a target='_blank' rel='noreferrer' href={source}>
              Source
            </a>
          </div>
        )}
      </figure>
    </div>
  )
}

export default Image
