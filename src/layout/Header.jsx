import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import urls from '../config/navigation.js'
import './Header.css'
const Header = ({
  scrollProgress,
  activeChapter,
  navigateToChapter,
  isMobile = false
}) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)
  const links = useRef({})
  const linkActiveClassName = isHamburgerActive ? 'display' : ''
  const mobileActiveClassName = isMobile ? 'mobile' : 'main'
  const iconName = isHamburgerActive ? 'close' : 'menu'

  useEffect(() => {
    if (!links.current) {
      return
    }
    Object.values(links.current).forEach(element => {
      element.className = `nav-item ${linkActiveClassName}`
    })
    if (links.current[activeChapter]) {
      const linkActiveClassName = isHamburgerActive ? 'display' : ''
      links.current[
        activeChapter
      ].className = `nav-item ${linkActiveClassName} active`
    }
  }, [activeChapter, isHamburgerActive, linkActiveClassName])

  const handleNavigationClick = nav => {
    navigateToChapter(nav.url)
    setIsHamburgerActive(!isHamburgerActive)
  }

  const toggleHamburgerNavigation = () => {
    setIsHamburgerActive(!isHamburgerActive)
  }

  return (
    <header>
      <nav className={`${mobileActiveClassName} ${linkActiveClassName}`}>
        <div className='col-4'>
          {isMobile && (
            <>
              <span>Lake Alice Psychiatric Hospital</span>
              <span
                onClick={toggleHamburgerNavigation}
                class={`material-symbols-outlined hamburger ${linkActiveClassName}`}
              >
                {iconName}
              </span>
            </>
          )}
        </div>

        {urls
          .filter(nav => (isMobile ? nav.isMobile : true)) // only display mobile items on mobile and everything on desktop
          .map((nav, index) => {
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
      {!isMobile && (
        <nav className='home'>
          <a href='/'>
            <h1>Lake Alice Psychiatric Hospital</h1>
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
