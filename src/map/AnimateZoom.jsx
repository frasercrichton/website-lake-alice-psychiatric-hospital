import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const AnimateZoom = ({ centreCoordinates, zoom }) => {
  const map = useMap()

  useEffect(() => {
    setTimeout(() => {
      map.flyTo(centreCoordinates, zoom, {
        animate: true,
        duration: 10
      })
    }, 4000)
  }, [])
}
export default AnimateZoom
