import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const AnimateZoom = ({ center, zoom, bounds }) => {
  const map = useMap()

  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds)
    }
  }, [map, bounds])
}
export default AnimateZoom
