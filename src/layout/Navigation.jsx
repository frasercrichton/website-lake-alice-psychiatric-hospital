import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import urls from '../config/navigation.js'
import './Navigation.css'
const Navigation = ({
  activeChapter,
  navigateToChapter,
  isMobile = false,
  isHamburgerActive,
  setIsHamburgerActive
}) => {
  const links = useRef({})
  const linkActiveClassName = isHamburgerActive ? 'display' : ''

  const location = useLocation()
  console.log('active', location.pathname === '/testimony')

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

  return urls
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
    })
}

export default Navigation
