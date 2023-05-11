import React, { useEffect, useState } from 'react'
// import { shallow } from 'zustand'
import useStore from '../state/store'

import './InteractiveMenu.css'

function InteractiveMenu ({ minorPoints }) {

  const [activeLabel, updateActiveLabel] = useStore(
    state => [state.activeLabel, state.updateActiveLabel]
    // shallow
  )

  useEffect(() => {
    updateActiveLabel('')
  }, [minorPoints, updateActiveLabel])

  const getName = item => {
    if (item.indexOf('-') === -1) {
      return item
    }
    return item.substring(0, item.indexOf('-'))
  }

  const getOpeningDate = item => (item.opened ? `(${item.opened})` : '')

  const activeClassName = (item) => item.id === activeLabel ? 'interactive-menu-item active' : 'interactive-menu-item' 

  const items = minorPoints.points
    .sort((a, b) => Number(a.opened) - Number(b.opened)) // TODO move out
    .map(item => {
      return (
        <li className={activeClassName(item)} key={item.id} onMouseEnter={element => updateActiveLabel(item.id)}>
          {`${getName(item.label)} ${getOpeningDate(item)}`}
        </li>
      )
    })

  return (
    <div className='map-navigation-container'>
      {minorPoints.title !== undefined && <h2>{minorPoints.title}:</h2>}
      <ul>{items}</ul>
    </div>
  )
}
export default InteractiveMenu
