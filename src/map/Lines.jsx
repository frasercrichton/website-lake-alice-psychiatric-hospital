import React from 'react'
import Line from './components/Line.jsx'
import Circle from './components/Circle.jsx'
import { LatLng } from 'leaflet'

const minorPointStyle = {
  fillColor: '#ffffff',
  iconSize: '50'
}

const Lines = ({ points, target }) => {
  if (!target) {
    return points.map((point, index) => {
      const startCoordinates = new LatLng(point.latitude, point.longitude)

      if (index === 0) {
        return (
          <Circle
            markerCoordinates={startCoordinates}
            label={point.label}
            {...minorPointStyle}
          />
        )
      }

      return (
        <>
          <Circle
            markerCoordinates={startCoordinates}
            label={point.label}
            {...minorPointStyle}
          />
          <Line
            key={`line-${index}`}
            start={startCoordinates}
            end={
              new LatLng(
                points[index - 1].latitude,
                points[index - 1].longitude
              )
            }
          />
        </>
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
