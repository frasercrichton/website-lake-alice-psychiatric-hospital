import React from 'react'
import './Icon.css'

const Icon = ({ action, iconType }) => {
  return (
    <div key='icon-wrapper' className='icon-wrapper'>
      <span onClick={e => action('')} className='material-symbols-outlined'>
      </span>
    </div>
  )
}

export default Icon
