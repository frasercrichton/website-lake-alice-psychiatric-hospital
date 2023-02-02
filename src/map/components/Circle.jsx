import React from 'react'
import { divIcon } from 'leaflet'
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
  const icon = divIcon({
    className: 'my-div-icon',
    iconSize: [74, 74],
    html: '<div>xxx</div>'
  })

  return (
    <CircleMarker
      icon={icon}
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
Circle.defaultProps = {
  radius: 10,
  fill: true,
  fillOpacity: 1,
  fillColor: '#000000',
  stroke: false,
  strokeColor: '#ff0000'
}

export default Circle
