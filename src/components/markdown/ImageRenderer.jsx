import React, { useState } from 'react'
import './ImageRenderer.css'
import Loader from '../Loader.jsx'

const Image = ({ alt, src, title }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoading = e => {
    setIsLoaded(!isLoaded)
  }

  return (
    <div className='image-container'>
      <div className='image'>
        <img alt={alt} src={src} onLoad={e => handleLoading(e)} />
        {!isLoaded && <Loader />}
      </div>
    </div>
  )
}

export default Image
