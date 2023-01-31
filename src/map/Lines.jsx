import React from 'react'
import Line from './components/Line.jsx'
import { LatLng } from 'leaflet'

const Lines = ({ points, target }) => {
  return points.map((point, index) => {
    const coordinates = new LatLng(point.latitude, point.longitude)
    const targetCoordinates = new LatLng(target.latitude, target.longitude)

    return (
      <Line key={`line-${index}`} start={coordinates} end={targetCoordinates} />
    )
  })
}
export default Lines
