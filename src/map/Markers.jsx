import React from 'react'
import Marker from './components/Marker.jsx'
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
    stroke: false,
  }

  return (
    <>
      {majorPoints &&
        majorPoints.map(point => {
          const coordinates = new LatLng(
            point.latitude,
            point.longitude
          )
          return <Marker markerCoordinates={coordinates} label={point.label} {...majorPointStyle} />
        })}

      {minorPoints &&
        minorPoints.map(coordinate => {
          const coordinates = new LatLng(
            coordinate.latitude,
            coordinate.longitude
          )
          return <Marker markerCoordinates={coordinates} {...minorPointStyle} />
        })}
    </>
  )
}
export default Markers
