import React from 'react'
import { CircleMarker, Tooltip } from 'react-leaflet'
import './Marker.css'

const Marker = ({
  markerCoordinates,
  title,
  fill,
  fillColor,
  fillOpacity,
  radius,
  stroke
}) => {
  return (
    <CircleMarker
      className='map-circle-marker'
      center={markerCoordinates}
      fill={fill}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      radius={radius}
      stroke={stroke}
    >
      {/* {title !== '' && <Tooltip permanent>{title}</Tooltip>} */}
    </CircleMarker>
  )
}
Marker.defaultProps = {
  fill: true,
  stroke: false,
  fillColor: '#000000'
}

export default Marker
