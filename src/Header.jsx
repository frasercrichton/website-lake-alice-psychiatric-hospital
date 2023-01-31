import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import urls from './config/navigation.jsx'
import './Header.css'
const Header = ({ scrollProgress }) => {
  const [active, setActive] = useState('')

  const isClicked = url => active === url

  const getClassName = url => (isClicked(url) ? `nav-item active` : `nav-item`)

  const navigate = useNavigate()

  const handleNavigationClick = url => {
    setActive(url)
    console.log('url', url)

    navigate(url)
  }
  return (
    <header>
      <nav className='main-navigation'>
        <div className='col-4'></div>
        {urls.map(nav => {
          return (
            <Link
              role='button'
              onClick={e => handleNavigationClick(nav.url)}
              // href='#'
              className={getClassName(nav.url)}
              to={nav.url}
            >
              {nav.text}
            </Link>
          )
        })}
      </nav>
      <div
        style={{ transform: `scaleX(${scrollProgress})` }}
        className='scroller-progress-bar'
      ></div>
      <nav className='home'>
        <a href='/'>
          <h1>Lake Alice Psychiatric Hospital</h1>
        </a>
      </nav>
    </header>
  )
}

export default Header
