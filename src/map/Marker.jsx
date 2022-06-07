import React, { useEffect, useState, useRef } from 'react'
import { LatLng } from 'leaflet'
import { CircleMarker, useMap } from 'react-leaflet'

const Marker = () => {
  const map = useMap()
  const lakeAliceCoordinates = new LatLng(-40.1254336, 175.3369864)
  const [fillOpacity, setFillOpacity] = useState('0')

  useEffect(() => {
    setTimeout(() => {
      map.flyTo(lakeAliceCoordinates, 16.5, {
        animate: true,
        duration: 10
      })
    }, 1000)
    setTimeout(() => {
      setFillOpacity('0.7')
    }, 10000)
  }, [])

  return (
    <>
      {fillOpacity !== '0' && (
        <CircleMarker
          className='map-marker'
          center={lakeAliceCoordinates}
          fill='true'
          fillColor='#a9a9a9'
          fillOpacity={fillOpacity}
          radius={20}
          stroke={false}
        />
      )}
    </>
  )
}
export default Marker
