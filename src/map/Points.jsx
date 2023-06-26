import React from 'react'
import Circle from './components/Circle.jsx'
import { LatLng } from 'leaflet'

const Points = ({ points, style, mapType = '' }) => {
  return (
    <>
      {points?.map(point => {
        const textLabel = mapType === 'interactive' ? '' : point.label
        return (
          <Circle
            key={point.id}
            markerCoordinates={new LatLng(point.latitude, point.longitude)}
            label={textLabel}
            {...style}
          />
        )
      })}
    </>
  )
}
export default Points
