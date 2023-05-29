import React, { useEffect, useState } from 'react'
import Circle from './Circle.jsx'
import useMapStore from '../../state/mapStore.js'
import { LatLng } from 'leaflet'

const Highlight = ({ points }) => {
  const [highlight, setHighlight] = useState({})

  const [activeLabel] = useMapStore(
    state => [state.activeLabel, state.updateActiveLabel]
    // shallow
  )
  useEffect(() => {
    const highlightedPoint = points?.find(element => element.id === activeLabel)
    setHighlight(highlightedPoint)
  }, [activeLabel, points])

  const highlightPointStyle = {
    fillColor: '#ff0000',
    iconSize: 150,
    strokeColor: '#0000ff'
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
