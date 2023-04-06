import React from 'react'
import WireframeBuilding from './WireframeBuilding.jsx'
import './Facility.css'

const OSMBuildings = ({ meshes }) => {
  return meshes.map(element => {
    return <WireframeBuilding node={element} />
  })
}

export default OSMBuildings
