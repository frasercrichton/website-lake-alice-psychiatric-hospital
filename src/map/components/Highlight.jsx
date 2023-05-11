import React, { useEffect, useState } from 'react'
import Circle from './Circle.jsx'
import useStore from '../../state/store.js'
import { LatLng } from 'leaflet'

const Highlight = ({ points }) => {
  const [highlight, setHighlight] = useState({})

  const [activeLabel] = useStore(
    state => [state.activeLabel, state.updateActiveLabel]
    // shallow
  )
  useEffect(() => {
    const highlightedPoint = points?.find(element => element.id === activeLabel)
    setHighlight(highlightedPoint)
  }, [activeLabel, points])

  const highlightPointStyle = {
    radius: '20',
    stroke: true,
    strokeColor: '#ff0000'
  }

  return (
    <>
      {highlight?.id !== undefined && (
        <Circle
          markerCoordinates={
            new LatLng(highlight.latitude, highlight.longitude)
          }
          label={highlight.label}
          {...highlightPointStyle}
        />
      )}
    </>
  )
}
export default Highlight
