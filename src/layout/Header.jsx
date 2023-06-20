import React, { useState } from 'react'
import useHeaderScrollProgress from '../state/scrollProgressStore.js'
import Navigation from './Navigation.jsx'
import './Header.css'

const Header = ({ activeChapter, navigateToChapter, isMobile = false }) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)
  const linkActiveClassName = isHamburgerActive ? 'display' : ''
  const mobileActiveClassName = isMobile ? 'mobile' : 'main'
  const iconName = isHamburgerActive ? 'close' : 'menu'

  const [headerScrollProgress] = useHeaderScrollProgress(
    state => [state.headerScrollProgress]
    // shallow
  )

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

        <Navigation activeChapter={activeChapter} navigateToChapter={navigateToChapter} isMobile={isMobile} isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />
      </nav>
      <div
        style={{ transform: `scaleX(${headerScrollProgress})` }}
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
