import React from 'react'
import Marker from './components/Marker'
import Line from './components/Line'
import { LatLng } from 'leaflet'
import stateCareFacilities from '../data/state-care-facilities.json'

const StateCareFacilities = lineCentre => {
  const marker = { fillColor: '#000000', radius: '5' }

  return stateCareFacilities.map((item, index) => {
    const coordinates = new LatLng(item[1], item[2])
    return (
      <>
        <Marker markerCoordinates={coordinates} title={item[0]} {...marker} />
        {item[3] && (
          <Line lineCentre={lineCentre} markerCoordinates={coordinates} />
        )}
      </>
    )
  })
}
export default StateCareFacilities
