import React, { useState } from 'react'
import './Menu.css'
import facilities from './data/facilities.json'
import MenuItem from './components/MenuItem'
const Menu = ({ setContent, selectedFacility, setSelectedFacility }) => {
  const [tab, setTab] = useState('site')

  const sortStringKeys = (a, b) => {
    console.log(a)
    return String(a).localeCompare(b)
  }
  return (
    <div className='menu-wrapper'>
      <h2>xx</h2>
      {tab === 'site' && (
        <div className='menu-items'>
          <ul className='menu-items-list'>
            {Object.values(facilities)
              .filter(facility => facility.type === 'significant')
              // .sort()
              .map(value => {
                return (
                  <MenuItem
                    key={value.id}
                    action={setSelectedFacility}
                    isActive={selectedFacility === value.id}
                    id={value.id}
                    label={value.name}
                  />
                )
              })}
          </ul>
        </div>
      )}

      <div className='menu-items'>
        <ul className='menu-items-list'>
          <MenuItem
            key='location'
            action={e => setContent('location')}
            id='location'
            label='Location'
          />
          <MenuItem
            key='testimony'
            action={e => setContent('testimony')}
            id='testimony'
            label='Testimony'
          />
        </ul>
      </div>
    </div>
  )
}

export default Menu
