import React from 'react'
import { Polyline } from 'react-leaflet'
import './Line.css'
const Line = ({ lineCentre, markerCoordinates }) => {
  return (
    <Polyline
      className='map-line'
      key={1}
      positions={[
        [lineCentre.lat, lineCentre.lng],
        [markerCoordinates.lat, markerCoordinates.lng]
      ]}
      color={'grey'}
    />
  )
}

export default Line
