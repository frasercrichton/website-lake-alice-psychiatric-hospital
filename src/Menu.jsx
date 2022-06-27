import React from 'react'
import './Menu.css'
import facilities from './data/facilities.json'
import MenuItem from './components/MenuItem'
const Menu = ({
  setContent,
  selectedFacility,
  handleMenuClick,
  setHoverName,
  hoverName,
  tab,
  handleContextUpdate
}) => {
  const isHovered = menuItem => hoverName === menuItem.id

  const isClicked = menuItem => selectedFacility === menuItem.id

  const sortedMenu = facilities.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className='menu-container'>
      <div className='tab-container'>
        {' '}
        <span className='tab' onClick={e => handleContextUpdate('site')}>Site</span> |{' '}
        <span className='tab' onClick={e => handleContextUpdate('context')}>Context</span>
      </div>
      {tab === 'site' && (
        <div className='menu-items'>
          {sortedMenu.map(value => {
            return (
              <MenuItem
                key={value.id}
                handleClick={handleMenuClick}
                accordionContent={value.content}
                handleHover={setHoverName}
                isHovered={isHovered(value)}
                isClicked={isClicked(value)}
                id={value.id}
                label={value.name}
              />
            )
          })}
        </div>
      )}

      {tab === 'context' && (
        <div className='menu-items'>
          <MenuItem
            accordionContent={'value.content'}
            key='location'
            handleClick={e => setContent('location')}
            id='location'
            label='Location'
          />
          <MenuItem
            accordionContent={'value.content'}
            key='testimony'
            handleClick={e => setContent('testimony')}
            id='testimony'
            label='Testimony'
          />
          <MenuItem
            accordionContent={'value.content'}
            key='info'
            handleClick={e => setContent('info')}
            id='info'
            label='Info'
          />
          <MenuItem
            accordionContent={'value.content'}
            key='about'
            handleClick={e => setContent('about')}
            id='about'
            label='About'
          />
        </div>
      )}
    </div>
  )
}

export default Menu
