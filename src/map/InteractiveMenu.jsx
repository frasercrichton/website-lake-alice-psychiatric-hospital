import React, { useEffect, useState } from 'react'
import useMapStore from '../state/mapStore'
import './InteractiveMenu.css'

const InteractiveMenu = ({ minorPoints }) => {
  const [firstItemActive, setFirstItemActive] = useState('')

  const [activeLabel, updateActiveLabel] = useMapStore(
    state => [state.activeLabel, state.updateActiveLabel]
    // shallow
  )
  useEffect(() => {
    updateActiveLabel('')
    setFirstItemActive(!firstItemActive)
  }, [])

  const getName = item => {
    if (item.indexOf('-') === -1) {
      return item
    }
    return item.substring(0, item.indexOf('-'))
  }

  const getOpeningDate = item => (item.opened ? `(${item.opened})` : '')

  const activeClassName = item =>
    item.id === activeLabel
      ? 'interactive-menu-item active'
      : 'interactive-menu-item'

  return (
    <div className='map-navigation-container'>
      {minorPoints.title !== undefined && <h2>{minorPoints.title}:</h2>}
      <ul>
        {minorPoints.points
          .sort((a, b) => Number(a.opened) - Number(b.opened)) // TODO move out
          .map((item, index) => {
            if (activeLabel === '' && index === 0) {
              // setFirstItemActive(item.id)
              updateActiveLabel(item.id)
            }
            if (index === 0) {
              // setFirstItemActive(item.id)
            }

            return (
              <li
                className={activeClassName(item)}
                key={item.id}
                onMouseEnter={element => updateActiveLabel(item.id)}
              >
                {`${getName(item.label)} ${getOpeningDate(item)}`}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
export default InteractiveMenu
