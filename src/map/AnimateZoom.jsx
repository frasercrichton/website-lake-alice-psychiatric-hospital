import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const AnimateZoom = ({ center, zoom, bounds }) => {
  const map = useMap()

  useEffect(() => {
    // map.flyTo(center, zoom, {
    //   animate: true,
    //   duration: 2
    //   // speed:
    //   // easing
    //   // curve
    // })
    map.fitBounds(bounds)
  }, [center, map, zoom, bounds])
}
export default AnimateZoom
