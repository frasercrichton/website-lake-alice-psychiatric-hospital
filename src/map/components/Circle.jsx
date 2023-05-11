import React from 'react'
import { CircleMarker, Tooltip } from 'react-leaflet'
import './Circle.css'

const Circle = ({
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
      className='map-circle-marker'
      key={markerCoordinates.lat}
      center={markerCoordinates}
      fill={fill}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      radius={radius}
      color={strokeColor}
      stroke={stroke}
    >
      {label && (
        <Tooltip direction='right' permanent>
          {label}
        </Tooltip>
      )}
    </CircleMarker>
  )
}
Circle.defaultProps = {
  radius: 10,
  fill: true,
  fillOpacity: 1,
  fillColor: '#000000',
  stroke: false,
  strokeColor: '#ff0000'
}

export default Circle
