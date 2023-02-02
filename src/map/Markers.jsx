import React from 'react'
import Circle from './components/Circle.jsx'
import Icon from './components/Icon.jsx'
import { LatLng } from 'leaflet'

const Markers = ({ majorPoints, minorPoints }) => {
  const majorPointStyle = {
    fillColor: '#000000',
    radius: '25',
    stroke: true,
    strokeColor: '#ff0000'
  }

  const minorPointStyle = {
    fillColor: '#000000',
    radius: '5',
    stroke: false
  }

  const getMarker = (point, style) => {
    const coordinates = new LatLng(point.latitude, point.longitude)
    return (
      <Circle markerCoordinates={coordinates} label={point.label} {...style} />
      // <Icon markerCoordinates={coordinates} label={point.label} {...style} />
    )
  }

  return (
    <>
      {majorPoints &&
        majorPoints.map(point => {
          return getMarker(point, majorPointStyle)
        })}

      {minorPoints &&
        minorPoints.map(point => {
          return getMarker(point, minorPointStyle)
        })}
    </>
  )
}
export default Markers
