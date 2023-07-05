import React from 'react'
import { Polyline } from 'react-leaflet'
import './Line.css'
const Line = ({ start, end }) => {
  return (
    <Polyline
      className='map-line'
      color='#E6E6E3'
      weight={3}
      stroke-linecap='round'
      key={start.lat + start.lng}
      positions={[
        [start.lat, start.lng],
        [end.lat, end.lng]
      ]}
    />
  )
}

export default Line
