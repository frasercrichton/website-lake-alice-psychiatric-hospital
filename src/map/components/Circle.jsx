import React from 'react'
import { divIcon } from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import './Circle.css'

const Circle = ({
  key,
  markerCoordinates,
  label,
  fill,
  fillColor,
  fillOpacity,
  iconSize,
  strokeColor
}) => {
  // using an SVG here as it the CircleMarker has scaling issues on zoom
  
  // am sure this mathematically accurate
  const iconAnchor = [iconSize / 8, iconSize / 10]

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

  return (
    <Marker
      className='map-circle-marker'
      key={key}
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
