import React from 'react'
import './Image.css'

const Image = ({ caption = '', src, recordID, URL, author, date, id }) => {

  const archwayRecordID = recordID ? (
    <span>Archway Item ID: {recordID} </span>
  ) : null

  const formattedDate = date ? <span>{date}. </span> : null
  const formattedAuthor = author ? <span>{author}. </span> : null

  return (
    <div className='image-container'>
      <figure className='figure'>
        <img
          key={src}
          src={src}
          alt={caption}
        />
        {caption !== '' && (
          <figcaption className='caption'>{caption}</figcaption>
        )}
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
