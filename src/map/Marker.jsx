import React, { useState } from 'react'
import { CircleMarker, useMap } from 'react-leaflet'

const Marker = ({ markerCoordinates, fill, fillColor, radius, stroke }) => {
  const map = useMap()
  const [fillOpacity, setFillOpacity] = useState('0')

  map.on('zoomend', function () {
    setFillOpacity('0.7')
  })

  return (
    <>
      {fillOpacity !== '0' && (
        <CircleMarker
          className='map-marker'
          center={markerCoordinates}
          fill={fill}
          fillColor={fillColor}
          fillOpacity={fillOpacity}
          radius={radius}
          stroke={stroke}
        />
      )}
    </>
  )
}
Marker.defaultProps = {
  fill: true,
  stroke: false,
  fillColor: '#000000'
}

export default Marker
