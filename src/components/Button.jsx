import React from 'react'
import './Button.css'

const Button = ({ action }) => {
  return (
    <div className='button-wrapper'>
      <button className='button' onClick={e => action('')}>
        close
      </button>
    </div>
  )
}

export default Button
