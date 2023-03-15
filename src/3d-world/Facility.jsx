import React, { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import Label from './Label.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import './Facility.css'
import facilities from '../config/facilities.json'

const materialX = new THREE.MeshPhongMaterial({
  color: 0xcccccc, // red (can also use a CSS color string here)
  flatShading: true,
  needsUpdate: true
})

const transparentMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0
})

const Facility = ({
  node,
  material,
  defaultMaterial: hoverMaterial,
  selectedFacility,
  handleFacilityClick,
  handleHover,
  hoverName,
  disabledMeshes
}) => {
  const mesh = useRef()

  const facilityId = node.name
  const hasShadow = !(node.name === 'Road' || node.name === 'Lakes')

  const findFacility = id => facilities.find(facility => facility.id === id)

  const isSignificantFacility =
    typeof findFacility(facilityId) !== 'undefined' &&
    findFacility(facilityId).type === 'significant'

  const isFacility = typeof findFacility(facilityId) !== 'undefined'
  const isHover = facilityId === hoverName
  const isClicked = facilityId === selectedFacility
  const meshEvents = isFacility
    ? {
        onPointerOver: e => handleHover(facilityId, e),
        onPointerOut: e => handleHover('', e)
      }
    : null

  const meshOnclick = isSignificantFacility
    ? {
        onClick: e => handleFacilityClick(facilityId)
      }
    : null

  useFrame((state, delta) => {
    if (disabledMeshes && disabledMeshes.includes(facilityId)) {
      disabledMeshes.forEach(element => {
        if (mesh.current.name.includes(element)) {
          mesh.current.material = transparentMaterial
          mesh.current.material.needsUpdate = true
        }
      })
    }
  })

  // This is a hack as Blender on export sets the child meshes in linked files to position 0,0,0 whilst the parent has the correct position
  const calculatedPosition =
    node.parent.name === 'Scene' ? node.position : node.parent.position

  const lakeMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000, // red (can also use a CSS color string here)
    flatShading: true,
    metalness: 0.42399996519088745,
    roughness: 0.31599998474121094
  })

  const roadMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000, // red (can also use a CSS color string here)
    flatShading: true,
    metalness: 0.42399996519088745,
    roughness: 1
    // {
    //   "isColor": true,
    //   "r": 0.09850652515888214,
    //   "g": 0.09850652515888214,
    //   "b": 0.09850652515888214
    // }
  })

  const lookAndFeelControls = LookAndFeelControls()
  const y = hasShadow ? calculatedPosition.y - 0.5 : calculatedPosition.y

  return (
    <mesh
      // TODO scale?
      ref={mesh}
      name={facilityId}
      geometry={node.geometry}
      material={node.material}
      side={THREE.FrontSide}
      receiveShadow
      castShadow={false}
      position={[calculatedPosition.x, y, calculatedPosition.z]}
      rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
    >
      {isFacility && (
        <meshPhongMaterial
          metalness={1}
          side={THREE.DoubleSide}
          attach='material'
          color={lookAndFeelControls['Building']}
          // transparent
          opacity={1}
        />
      )}

      <Label id={node.name} text={label} position={[node.position.x, node.position.y, node.position.z]}
      />
    </mesh>
  )
}

export default Facility
