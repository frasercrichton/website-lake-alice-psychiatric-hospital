import React from 'react'
import './Menu.css'
import facilities from './data/facilities.json'
import MenuItem from './components/MenuItem'
const Menu = ({
  setContent,
  selectedFacility,
  setSelectedFacility,
  setHoverName,
  hoverName,
  tab,
  setTab
}) => {
  const isHovered = menuItem => hoverName === menuItem.id

  const isClicked = menuItem => selectedFacility === menuItem.id

  const sortedMenu = facilities.sort((a, b) => a.name.localeCompare(b.name))

  const toggleContext = (e) => {
    setSelectedFacility('')
    setTab('context')
  }
  return (
    <div className='menu-container'>
      <h2>
        {' '}
        <span onClick={e => setTab('site')}>Site</span> |{' '}
        <span onClick={e => toggleContext(e)}>Context</span>
      </h2>
      {tab === 'site' && (
        <div className='menu-items'>
          {sortedMenu.map(value => {
            return (
              <MenuItem
                key={value.id}
                clickAction={setSelectedFacility}
                accordionContent={value.content}
                hoverAction={setHoverName}
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
            clickAction={e => setContent('location')}
            id='location'
            label='Location'
          />
          <MenuItem
            accordionContent={'value.content'}
            key='testimony'
            clickAction={e => setContent('testimony')}
            id='testimony'
            label='Testimony'
          />
          <MenuItem
            accordionContent={'value.content'}
            key='info'
            clickAction={e => setContent('info')}
            id='info'
            label='Info'
          />
          <MenuItem
            accordionContent={'value.content'}
            key='about'
            clickAction={e => setContent('about')}
            id='about'
            label='About'
          />
        </div>
      )}
    </div>
  )
}

export default Menu
