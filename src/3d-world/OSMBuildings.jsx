import React from 'react'
import WireframeBuilding from './WireframeBuilding.jsx'
import getLabel from './labelText.js'

const OSMBuildings = ({ meshes, labels }) => {
  return meshes.map(mesh => {
    return (
      <WireframeBuilding
        key={mesh.name}
        node={mesh}
        label={getLabel(mesh.name, labels)}
      />
    )
  })
}

export default OSMBuildings
