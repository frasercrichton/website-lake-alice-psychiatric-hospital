import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import Label from './Label.jsx'
import './Facility.css'

const Mesh = ({ node, label }) => {

  const facilityId = node.name
  const hasShadow = !(node.name === 'Road' || node.name === 'Lakes')

  const y = hasShadow ? node.position.y - 0.5 : node.position.y

  return (
    <mesh
      scale={node.scale}
      name={facilityId}
      geometry={node.geometry}
      material={node.material}
      receiveShadow
      castShadow
      position={[node.position.x, y, node.position.z]}
      rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
    >
      {label && <Label id={node.name} text={label} />}
    </mesh>
  )
}

export default Mesh
