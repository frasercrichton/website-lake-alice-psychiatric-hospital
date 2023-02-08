import React from 'react'
import { divIcon } from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import './Icon.css'

const Icon = ({
  markerCoordinates,
  label,
  fill,
  fillColor,
  fillOpacity,
  radius,
  stroke,
  strokeColor
}) => {
  const div = `${label}`

  const icon = divIcon({
    className: 'marker-icon',
    iconSize: 'auto',
    html: div
  })

  return (
    <Marker
      icon={icon}
      key={markerCoordinates.lat}
      className='map-circle-marker'
      position={markerCoordinates}
      fill={fill}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      radius={radius}
      color={strokeColor}
      stroke={stroke}
    />
  )
}
Icon.defaultProps = {
  radius: 10,
  fill: true,
  fillOpacity: 1,
  fillColor: '#000000',
  stroke: false,
  strokeColor: '#ff0000'
}

export default Icon
