import React from 'react'
import Mesh from './Mesh.jsx'
import getLabel from './labelText.js'

const Groups = ({ groups, labels }) => {
  const verticalOffset = -0.1

  // Interactive Transparency for villa floor plans
  const getMaterial = mesh =>
    mesh.disabledMaterial !== undefined ? mesh.disabledMaterial : mesh.material

  return groups.flat().map(mesh => {
    return (
      <Mesh
        key={mesh.name}
        node={mesh}
        material={getMaterial(mesh)}
        verticalOffset={verticalOffset}
        label={getLabel(mesh.name, labels)}
      />
    )
  })
}

export default Groups
