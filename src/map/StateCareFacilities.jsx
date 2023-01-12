import React from 'react'
import Marker from './Marker'
import stateCareFacilities from '../data/state-care-facilities.json '

const StateCareFacilities = () => {
  return (
    <div className='map-container'>
      <Marker markerCoordinates={initialCentreCoordinates} {...marker} />
    </div>
  )
}
export default StateCareFacilities
