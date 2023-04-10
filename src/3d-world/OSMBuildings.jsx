import React from 'react'
import WireframeBuilding from './WireframeBuilding.jsx'
import './Facility.css'

const OSMBuildings = ({ meshes, labels }) => {
  const getLabel = id => {
    const label = labels?.find(item => item.id === id)
    return label === undefined ? undefined : label.label
  }

  return meshes.map(mesh => {
    return (
      <WireframeBuilding
        key={mesh.name}
        node={mesh}
        label={getLabel(mesh.name)}
      />
    )
  })
}

export default OSMBuildings
