import React, { useEffect, useState } from 'react'
import useMapStore from '../state/mapStore'
import './InteractiveMenu.css'

const InteractiveMenu = ({ minorPoints, pageInView }) => {
  const [mapActiveLabel, updateMapActiveLabel] = useMapStore(
    state => [state.mapActiveLabel, state.updateMapActiveLabel]
    // shallow
  )
  const [activeLabel, setActiveLabel] = useState('')
  
  useEffect(() => {
    const firstPointId =
      pageInView?.map?.visibleMapLayers?.minorPoints?.points[0].id
    updateMapActiveLabel(firstPointId)
    setActiveLabel(firstPointId)
  }, [pageInView, updateMapActiveLabel])

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

  const updateLabelItem = id => {
    updateMapActiveLabel(id)
    setActiveLabel(id)
  }

  return (
    <div className='map-navigation-container'>
      {minorPoints.title !== undefined && <h2>{minorPoints.title}:</h2>}
      <ul>
        {minorPoints.points
          .sort((a, b) => Number(a.opened) - Number(b.opened)) // TODO move out
          .map((item, index) => {
            if (activeLabel === '' && index === 0) {
              updateLabelItem(item.id)
            }
            return (
              <li
                className={activeClassName(item)}
                key={item.id}
                onMouseEnter={element => updateLabelItem(item.id)}
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
