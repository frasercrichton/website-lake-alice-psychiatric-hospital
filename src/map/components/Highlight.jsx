import React, { useEffect, useState } from 'react'
import Circle from './Circle.jsx'
import useMapStore from '../../state/mapStore.js'
import { LatLng } from 'leaflet'

const Highlight = ({ minorPoints }) => {
  const [highlight, setHighlight] = useState({})

  const [mapActiveLabel] = useMapStore(
    state => [state.mapActiveLabel, state.updateMapActiveLabel]
    // shallow
  )

  useEffect(() => {
    const highlightedPoint = minorPoints?.points.find(
      element => element.id === mapActiveLabel
    )
    setHighlight(highlightedPoint)
  }, [mapActiveLabel, minorPoints])

  const highlightPointStyle = {
    fillColor: '#ff0000',
    iconSize: 100,
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
