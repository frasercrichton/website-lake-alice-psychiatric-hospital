import React, { useState } from 'react'
import './Header.css'

const Header = props => {
  // const [hover, setHover] = useState(false)
  return (
    <header>
      <nav>
        <a href='/'>
          <h1>Lake Alice</h1>
        </a>
        <a className='about' href='/'>About</a>
      </nav>
    </header>
  )
}

export default Header
