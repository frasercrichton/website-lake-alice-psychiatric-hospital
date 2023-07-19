import React, { useState } from 'react'
import Source from './Source'
import MaterialIcon from './MaterialIcon.jsx'
import './Image.css'

const Image = ({
  caption = '',
  src,
  recordID,
  URL,
  author,
  date,
  id,
  isExpandable
}) => {
  const [isIconAdd, setIsIconAdd] = useState(true)
  const onIconClick = () => {
    setIsIconAdd(!isIconAdd)
  }

  const expandableClassName = isExpandable ? 'expandable' : ''
  const overflowClassName =
    isExpandable && !isIconAdd ? 'overflow-container' : null

  const containerClassName = isIconAdd
    ? `${expandableClassName} image-container`.trim()
    : 'full-page-image-container'

  const imageSrc = isIconAdd ? src : `${src.split('.jpg')[0]}-max.jpg`

  return (
    <div className={containerClassName}>
      <div className={overflowClassName}>
        {isExpandable && (
          <MaterialIcon onExpandClick={onIconClick} isIconAdd={isIconAdd} />
        )}
        <figure className='figure'>
          <img
            key={imageSrc}
            src={imageSrc}
            alt={caption}
            onClick={onIconClick}
          />
          {caption !== '' && (
            <figcaption className='caption'>{caption}</figcaption>
          )}
          {(URL ?? author) && (
            <Source recordID={recordID} URL={URL} author={author} date={date} />
          )}
        </figure>
      </div>
    </div>
  )
}

export default Image
