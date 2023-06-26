import React from 'react'
import Mesh from './Mesh.jsx'
import getLabel from './labelText.js'

const Groups = ({ groups, labels }) => {
  const verticalOffset = -0.1

  return groups.flat().map(mesh => {
    return (
      <Mesh
        key={mesh.name}
        node={mesh}
        material={mesh.disabledMaterial ?? mesh.material} // Interactive Transparency for villa floor plans
        verticalOffset={verticalOffset}
        label={getLabel(mesh.name, labels)}
      />
    )
  })
}

export default Groups
