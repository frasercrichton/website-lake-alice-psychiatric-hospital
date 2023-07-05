import React, { useState } from 'react'
import Loader from './Loader.jsx'
import './Image.css'

const Image = ({ caption = '', src, recordID, URL, author, date, id }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoading = isLoaded => {
    setIsLoaded(isLoaded)
  }

  const archwayRecordID = recordID ? (
    <span>Archway Item ID: {recordID} </span>
  ) : null

  const formattedDate = date ? <span>{date}. </span> : null
  const formattedAuthor = author ? <span>{author}. </span> : null

  return (
    <div className='image-container'>
      <figure className='figure'>
        <img key={src} src={src} alt={caption} onLoad={e => handleLoading(true)} />
        {caption !== '' && (
          <figcaption className='caption'>{caption}</figcaption>
        )}
        {/* {!isLoaded && <Loader />} */}
        {(URL ?? author) && (
          <div className='source'>
            {archwayRecordID}
            {formattedAuthor}
            {formattedDate}
            {URL && (
              <a target='_blank' rel='noreferrer' href={URL}>
                original
              </a>
            )}
          </div>
        )}
      </figure>
    </div>
  )
}

export default Image
