import React from 'react'
import Label from './Label.jsx'

const Mesh = ({ node, material, verticalOffset = 0, label }) => {
  const meshName = node.name
  return (
    <mesh
      scale={node.scale}
      name={meshName}
      geometry={node.geometry}
      material={material}
      position={[
        node.position.x,
        node.position.y + verticalOffset,
        node.position.z
      ]}
      rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
      receiveShadow
      castShadow
    >
      {label && <Label id={meshName} text={label} />}
    </mesh>
  )
}

export default Mesh
