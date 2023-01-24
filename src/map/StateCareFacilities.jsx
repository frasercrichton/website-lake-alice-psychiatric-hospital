import React from 'react'
import Marker from './components/Marker'
import Line from './components/Line'
import { LatLng } from 'leaflet'
// TODO inject
import stateCareFacilities from '../config/state-care-facilities.json'

const StateCareFacilities = ({ visibleMapLayers, lineCentre }) => {
  // console.log('visibleMapLayers', visibleMapLayers.pathways)
  const marker = { fillColor: '#000000', radius: '5' }
  const isPathways = visibleMapLayers && visibleMapLayers.pathways

  // labels
  return stateCareFacilities.map((facility, index) => {
    const coordinates = new LatLng(facility.latitude, facility.longitude)
    const label =
      visibleMapLayers &&
      visibleMapLayers.labels &&
      visibleMapLayers.labels.includes(facility.facility)
        ? facility.facility
        : null
    const hasMarkersVisible =
      visibleMapLayers &&
      visibleMapLayers.sites &&
      visibleMapLayers.sites.includes('all')

    return (
      <>
        {hasMarkersVisible && (
          <Marker markerCoordinates={coordinates} title={label} {...marker} />
        )}

        {facility.feeder && isPathways && (
          <Line lineCentre={lineCentre} markerCoordinates={coordinates} />
        )}
      </>
    )
  })
}
export default StateCareFacilities

// visibleMapLayers: { sectionInView.visibleMapLayers.pathways
//   centrePoint: true,
//   pathways: true
// }
