import React from 'react'
import Line from './components/Line.jsx'
import { LatLng } from 'leaflet'

const Markers = ({ items, target }) => {
  return items.map((facility, index) => {
    const coordinates = new LatLng(facility.latitude, facility.longitude)
    const targetCoordinates = new LatLng(target.latitude, target.longitude)

    return (
      <>
        {facility.feeder && (
          <Line start={coordinates} end={targetCoordinates} />
        )}
      </>
    )
  })
}
export default Markers
