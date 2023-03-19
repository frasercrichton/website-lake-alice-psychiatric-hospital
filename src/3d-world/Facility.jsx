import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import Label from './Label.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import './Facility.css'

const Facility = ({ node, disabledMeshes, label }) => {
  const mesh = useRef()
  const lookAndFeelControls = LookAndFeelControls()

  const materials = {
    roads: new THREE.MeshStandardMaterial({
      color: '#585858',
      roughness: 1,
      metalness: 0,
      flatShading: false
    }),
    'lake-surface': new THREE.MeshStandardMaterial({
      color: 0xc000000,
      roughness: 0.31599998474121094,
      metalness: 0.42399996519088745,
      flatShading: false
    }),
    roofs: new THREE.MeshStandardMaterial({
      color: '#4f666a',
      side: THREE.DoubleSide,
      roughness: 0.5,
      metalness: 0,
      flatShading: false
    }),
    walls: new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      side: THREE.DoubleSide,
      flatShading: true
    }),
    floors: new THREE.MeshStandardMaterial({
      color: '#4f666a',
      side: THREE.DoubleSide,
      roughness: 0.5,
      metalness: 0,
      flatShading: false
    }),
    buildings: new THREE.MeshStandardMaterial({
      color: '#d2c1cd',
      roughness: 0.4000000059604645,
      side: THREE.DoubleSide,
      flatShading: true
    }),
    bedframe: new THREE.MeshStandardMaterial({
      color: '#343434',
      roughness: 0.4000000059604645,
      side: THREE.DoubleSide,
      flatShading: true
    }),
    mattress: new THREE.MeshStandardMaterial({
      color: '#ffffff',
      side: THREE.DoubleSide,
      flatShading: true,
      roughness: 0.4000000059604645
    }),
    transparent: new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      transparent: true,
      castShadow: false,
      opacity: 0
    }),
    default: new THREE.MeshStandardMaterial({
      color: '#d2c1cd',
      side: THREE.DoubleSide,
      roughness: 0.4000000059604645
    })
  }

  const facilityId = node.name
  const hasShadow = !(node.name === 'Road' || node.name === 'Lakes')

  const getMaterial = blenderMaterial => {
    const material =
      blenderMaterial === undefined ? '' : blenderMaterial.name.split('.')[0]
    return material !== '' ? materials[material] : materials.default
  }

  useFrame((state, delta) => {
    if (disabledMeshes && disabledMeshes.includes(facilityId)) {
      disabledMeshes.forEach(element => {
        if (mesh.current.name.includes(element)) {
          mesh.current.material = materials.transparent
          mesh.current.material.needsUpdate = true
        }
      })
    }
  })

  const y = hasShadow ? node.position.y - 0.5 : node.position.y

  return (
    <mesh
      scale={node.scale}
      ref={mesh}
      name={facilityId}
      geometry={node.geometry}
      material={getMaterial(node.material)}
      // receiveShadow
      castShadow={true}
      position={[node.position.x, y, node.position.z]}
      rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
    >
      {/* <Label
        id={node.name}
        text={label}
        position={[node.position.x, node.position.y, node.position.z]}
      /> */}
    </mesh>
  )
}

export default Facility
