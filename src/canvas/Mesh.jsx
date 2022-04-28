import React, { useState, useRef, useEffect } from 'react'
import { Html } from '@react-three/drei'
import Label from './Label'
const facilities = {
  Maximum_Security_Block: 'Maximum Security Block',
  "Villa_7_-_Girls'_Unit": "Girls' Unit",
  "Villa_8_-__Boys'_Unit": "Boys' Unit",

  // Villa_13: 'Villa 13',
  // Villa_14: 'Disturbed Patients Villa',
  // Villa_15: 'Villa 15',
  // 'Villas_9_-_18': 'Eleven Bed Villas',
  // Administrative_Building: 'Administrative Building',
  // Community_Hall: 'Community Hall',
  "Doctors'_Houses": "Doctors' Villas"
  // Staff_Quarters: 'Staff Quarters',
  // Swimming_Pool: 'Swimming Pool',
}

const Mesh = ({
  node,
  material,
  defaultMaterial: hoverMaterial,
  setClicked,
  clicked,
  hoverAction,
  hoverName
}) => {
  const mesh = useRef()
  const html = useRef()
  const isAnnotation = node.name.includes('Annotation')
  const facilityName = node.name.replace('_Annotation', '')
  const isFacility = typeof facilities[facilityName] !== 'undefined'
  const isHover = facilityName === hoverName
  const isClicked = clicked && facilityName === clicked.id
  const isActive = isClicked || isHover

  const meshEvents = isFacility
    ? {
        onClick: e => setClicked({ id: facilityName, mesh: e }),
        onPointerOver: e => hoverAction(facilityName, e),
        onPointerOut: e => hoverAction('', e)
      }
    : null

  useEffect(() => {
    document.body.style.cursor = isHover ? 'pointer' : 'auto'
  }, [isHover])

  return (
    <mesh
      ref={mesh}
      name={facilityName}
      geometry={node.geometry}
      material={material}
      {...meshEvents}
    >
      {isFacility && (
        <meshStandardMaterial
          metalness={0.1}
          attach='material'
          color={isActive ? '#ec407a' : 'rgb(255,255,255)'}
          transparent
          opacity={isActive ? 0.5 : 1}
        />
      )}
      {isAnnotation && isFacility && (
        <Html
          ref={html}
          // transform
          // sprite
          // rotation={[Math.PI / 2, 0, 0]}
          distanceFactor={100}
          position={[node.position.x, node.position.y, node.position.z]}
        >
          <Label
            id={node.name}
            text={facilities[facilityName]}
            hoverAction={hoverAction}
            hoverName={hoverName}
            // onClick={(mesh) => setClicked(mesh)}
          />
        </Html>
      )}
      )
    </mesh>
  )
}

export default Mesh
