import React from 'react'
import { Polyline } from 'react-leaflet'
import './Line.css'
const Line = ({ start, end }) => {
  return (
    <Polyline
      className='map-line'
      color='#0000ff'
      key={1}
      positions={[
        [start.lat, start.lng],
        [end.lat, end.lng]
      ]}
    />
  )
}

export default Line
