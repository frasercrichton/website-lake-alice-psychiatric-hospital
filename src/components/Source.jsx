import React from 'react'
import './Source.css'

const Source = ({ recordID, URL, author, date }) => {
  return (
    <div className='source'>
      {recordID && <span>Archway Item ID: {recordID} </span>}
      <span>{author}. </span>
      {date && <span>{date}. </span>}
      <a target='_blank' rel='noreferrer' href={URL}>
        original
      </a>
    </div>
  )
}

export default Source
