import React from 'react'
import * as THREE from 'three'
import Label from './Label.jsx'
import './Facility.css'

const WireframeBuilding = ({ node, label }) => {
  const geometry = new THREE.EdgesGeometry(node.geometry)
  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    linewidth: 1
  })

  const wireframe = new THREE.LineSegments(geometry, material)

  return (
    <primitive
      scale={node.scale}
      name={node.name}
      object={wireframe}
      castShadow={true}
      position={[node.position.x, node.position.y, node.position.z]}
      rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
    >
      {label && <Label id={node.name} text={label} />}
    </primitive>
  )
}

export default WireframeBuilding
