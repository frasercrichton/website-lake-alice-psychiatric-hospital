import React, { useRef, useEffect } from 'react'
import Facility from './Facility.jsx'

const Groups = ({ groups, disabledMeshes, labels }) => {
  
  const getLabel = id => {
    const label = labels?.find(item => item.id === id)
    return label === undefined ? undefined : label.label
  }

  return groups.flat().map(mesh => {
    return (
      <Facility
        key={mesh.name}
        node={mesh}
        label={getLabel(mesh.name)}
        disabledMeshes={disabledMeshes}
      />
    )
  })
}

export default Groups
