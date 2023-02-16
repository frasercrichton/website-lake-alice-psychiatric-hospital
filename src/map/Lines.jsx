import React from 'react'
import Line from './components/Line.jsx'
import { useSpring, animated } from '@react-spring/web'
import { LatLng } from 'leaflet'

const Lines = ({ points, target }) => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 }
  })

  if (!target) {
    return points.map((point, index) => {
      if (index === 0) {
        return null
      }

      const startCoordinates = new LatLng(point.latitude, point.longitude)

      return (
        <Line
          key={`line-${index}`}
          start={startCoordinates}
          end={
            new LatLng(points[index - 1].latitude, points[index - 1].longitude)
          }
        />
      )
    })
  }

  return points.map((point, index) => {
    const startCoordinates = new LatLng(point.latitude, point.longitude)
    return (
      <Line
        key={`line-${index}`}
        start={startCoordinates}
        end={new LatLng(target.latitude, target.longitude)}
      />
    )
  })
}
export default Lines
