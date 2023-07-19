import React from 'react'
import './MaterialIcon.css'

const MaterialIcon = ({ onExpandClick, isIconAdd }) => {
  const iconName = isIconAdd ? 'add' : 'remove'
 
  return (
    <i
      className='material-icons source-icon'
      role='button'
      onClick={onExpandClick}
    >
      {iconName}
    </i>
  )
}

export default MaterialIcon
