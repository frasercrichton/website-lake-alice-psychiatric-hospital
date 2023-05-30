import React, { useState } from 'react'
import Loader from './Loader.jsx'
import './Image.css'

const Image = ({ caption = '', src, recordID, sourceURL, owner, id }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoading = isLoaded => {
    setIsLoaded(isLoaded)
  }

  const archwayRecordID = recordID ? `Archway Item ID: ${recordID}` : null

  return (
    <div className='image-container'>
      <figure className='figure'>
        <img src={src} alt={caption} onLoad={e => handleLoading(true)} />
        {caption !== '' && (
          <figcaption className='caption'>{caption}</figcaption>
        )}
        {/* {!isLoaded && <Loader />} */}
        {sourceURL && (
          <div className='source'>
            <span>{archwayRecordID} </span>
            <span>{owner} </span>
            <a target='_blank' rel='noreferrer' href={sourceURL}>
              original
            </a>
          </div>
        )}
      </figure>
    </div>
  )
}

export default Image
