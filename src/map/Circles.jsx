import React from 'react'
import Circle from './components/Circle.jsx'
import Icon from './components/Icon.jsx'
import { LatLng } from 'leaflet'

const Circles = ({ majorPoints, minorPoints }) => {
  const majorPointStyle = {
    fillColor: '#ffffff',
    radius: '10',
    stroke: true,
    strokeColor: '#ededed'
  }
  const minorPointStyle = {
    fillColor: minorPoints?.colour ? minorPoints.colour : '#ffffff',
    radius: '5',
    stroke: false
  }

  const getMarker = (point, style) => {
    const coordinates = new LatLng(point.latitude, point.longitude)
    return (
      <>
        <Circle
          markerCoordinates={coordinates}
          label={point.label}
          {...style}
        />

        {/* <Icon markerCoordinates={coordinates} label={point.label} {...style} /> */}
      </>
    )
  }

  return (
    <>
      {majorPoints &&
        majorPoints.map(point => {
          return getMarker(point, majorPointStyle)
        })}

      {minorPoints &&
        minorPoints.points.map(point => {
          return getMarker(point, minorPointStyle)
        })}
    </>
  )
}
export default Circles
