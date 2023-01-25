import React from 'react'
import { CircleMarker, Tooltip } from 'react-leaflet'
import './Marker.css'

const Marker = ({
  markerCoordinates,
  label,
  fill,
  fillColor,
  fillOpacity,
  radius,
  stroke,
  strokeColor
}) => {
  return (
    <CircleMarker
      key={markerCoordinates.lat}
      className='map-circle-marker'
      center={markerCoordinates}
      fill={fill}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      radius={radius}
      color={strokeColor}
      stroke={stroke}
    >
      {label && <Tooltip permanent>{label}</Tooltip>}
    </CircleMarker>
  )
}
Marker.defaultProps = {
  radius: 10,
  fill: true,
  fillOpacity: 1,
  fillColor: '#000000',
  stroke: false,
  strokeColor: '#ff0000'
}

export default Marker
