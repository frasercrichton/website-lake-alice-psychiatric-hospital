import React from 'react'
import './MenuItem.css'

const MenuItem = ({ action, isActive, id, label }) => {
  const activeClass = isActive ? 'menu-item active' : 'menu-item'

  return (
    <li key={id} className={activeClass} onClick={e => action(id)}>
      {label}
    </li>
  )
}

export default MenuItem
