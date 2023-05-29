import React from 'react'
import { divIcon } from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import './Circle.css'

const Circle = ({
  markerCoordinates,
  label,
  fill,
  fillColor,
  fillOpacity,
  iconSize,
  strokeColor
}) => {
  // using an SVG here as it the CircleMarker has scaling issues on zoom
  // stroke="${strokeColor}"
  // stroke-color="${strokeColor}"
  // stroke-width="40"

  // am sure this mathematically accurate
  const iconAnchor = [iconSize / 5, iconSize / 10]

  const svg = `<svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle 
      cx="10" 
      cy="10" 
      r="10" 
      fill="${fillColor}" 
      fill="${fill}" 
      fill-opactity="${fillOpacity}"
     />
  </svg>`

  const icon = divIcon({
    html: svg,
    className: 'div-icon',
    iconSize: [iconSize, iconSize],
    iconAnchor: iconAnchor
  })

  // 50 [10, 5] total/5, /10
  // 150 [30 15]

  return (
    <Marker
      className='map-circle-marker'
      key={markerCoordinates.lat}
      position={markerCoordinates}
      icon={icon}
    >
      {label && (
        <Tooltip direction='right' permanent>
          {label}
        </Tooltip>
      )}
    </Marker>
  )
}
Circle.defaultProps = {
  radius: 10,
  fill: true,
  fillOpacity: 1,
  fillColor: '#000000'
}

export default Circle
