import React from 'react'
import * as THREE from 'three'
import Label from './Label.jsx'

const material = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 1
})

const WireframeBuilding = ({ node, label }) => {
  const geometry = new THREE.EdgesGeometry(node.geometry)
  const wireframe = new THREE.LineSegments(geometry, material)

  return (
    <primitive
      name={node.name}
      scale={node.scale}
      object={wireframe}
      position={[node.position.x, node.position.y + 0.5, node.position.z]}
      rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
    >
      {label && <Label id={node.name} text={label} />}
    </primitive>
  )
}

export default WireframeBuilding
