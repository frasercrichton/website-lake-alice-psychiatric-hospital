import React, { useRef, useEffect } from 'react'
import { Html } from '@react-three/drei'
import './Facility.css'
import Label from './Label'
import significantFacilities from '../data/significantFacilities.json'

const facilities = {
  Administrative_Building: 'Administrative Building',
  Maximum_Security_Block: 'Maximum Security Block',
  "Doctors'_Houses": "Doctors' Villas",
  "Villa_7_-_Girls'_Unit": "Girls' Unit",
  "Villa_8_-__Boys'_Unit": "Boys' Unit",
  'Villas_9_-_18': 'Eleven Bed Villas',
  Staff_Quarters: 'Staff Quarters',
  Swimming_Pool: 'Swimming Pool',
  Villa_13: 'Adult Patients Villa 13',
  Villa_14: 'Disturbed Patients Villa',
  Villa_15: 'Adult Patients Villa 15',
  Community_Hall: 'Community Hall'
}

const Facility = ({
  node,
  material,
  defaultMaterial: hoverMaterial,
  selectedFacility,
  setSelectedFacility,
  hoverAction,
  hoverName
}) => {
  const mesh = useRef()

  const isAnnotation = node.name.includes('Annotation')
  const facilityName = node.name.replace('_Annotation', '')
  const isSignificantFacility =
    typeof significantFacilities[facilityName] !== 'undefined'
  const isFacility = typeof facilities[facilityName] !== 'undefined'

  const isHover = facilityName === hoverName

  const isClicked = facilityName === selectedFacility
  const isActive = isClicked || isHover

  const meshEvents = isFacility
    ? {
        onPointerOver: e => hoverAction(facilityName, e),
        onPointerOut: e => hoverAction('', e)
      }
    : null

  const meshOnclick = isSignificantFacility
    ? {
        onClick: e => setSelectedFacility(facilityName)
      }
    : null

  return (
    <mesh
      ref={mesh}
      name={facilityName}
      geometry={node.geometry}
      material={material}
      {...meshEvents}
      {...meshOnclick}
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
      {isAnnotation && isSignificantFacility && (
        <Html
          // transform
          // sprite
          // rotation={[Math.PI / 2, 0, 0]}
          zIndexRange={[100, 0]}
          distanceFactor={100}
          position={[node.position.x, node.position.y, node.position.z]}
        >
          <Label
            id={node.name}
            text={significantFacilities[facilityName]}
            hoverAction={hoverAction}
            hoverName={hoverName}
            setSelectedFacility={setSelectedFacility}
            isClicked={isClicked}
          />
        </Html>
      )}
      )
      {isHover && isFacility && isAnnotation && (
        <Html
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
            setSelectedFacility={setSelectedFacility}
            isClicked={isClicked}
          />
        </Html>
      )}
      )
    </mesh>
  )
}

export default Facility
