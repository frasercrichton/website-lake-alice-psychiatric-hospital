import React, { useState, useEffect, useMemo } from 'react'
import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import urls from './config/navigation.js'
import './Header.css'
const Header = ({ scrollProgress, active, setActive }) => {
  const links = useRef({})

  useEffect(() => {
    Object.values(links.current).forEach(element => {
      element.className = 'nav-item'
    })
    links.current[active].className = 'nav-item active'
  }, [active])

  const navigate = useNavigate()

  const handleNavigationClick = nav => {
    setActive(nav.url)
    navigate(nav.url)
  }
  return (
    <header>
      <nav className='main-navigation'>
        <div className='col-4'></div>
        {urls.map((nav, index) => {
          return (
            <Link
              key={nav.url}
              ref={element => (links.current[nav.url] = element)}
              role='button'
              onClick={e => handleNavigationClick(nav)}
              // href='#'
              className={'nav-item'}
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
