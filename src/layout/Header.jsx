import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import urls from '../config/navigation.js'
import './Header.css'
const Header = ({ scrollProgress, activeChapter, navigateToChapter }) => {
  const links = useRef({})

  useEffect(() => {
    Object.values(links.current).forEach(element => {
      element.className = 'nav-item'
    })
    links.current[activeChapter].className = 'nav-item active'
  }, [activeChapter])

  const handleNavigationClick = nav => {
    navigateToChapter(nav.url)
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
      >
        &nbsp;
      </div>
      <nav className='home'>
        <a href='/'>
          <h1>Lake Alice Psychiatric Hospital</h1>
        </a>
      </nav>
    </header>
  )
}

export default Header
