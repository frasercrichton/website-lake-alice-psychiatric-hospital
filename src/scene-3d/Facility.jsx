import React, { useRef } from 'react'
import './Facility.css'
import Label from './Label'
import facilities from '../data/facilities.json'
import LookAndFeelControls from '../controls/LookAndFeel'
import * as THREE from 'three'

const Facility = ({
  node,
  material,
  defaultMaterial: hoverMaterial,
  selectedFacility,
  handleFacilityClick,
  handleHover,
  hoverName
}) => {
  const mesh = useRef()
  const isAnnotation = node.name
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

  const lookAndFeelControls = LookAndFeelControls()

  return (
    <mesh
      ref={mesh}
      name={facilityId}
      geometry={node.geometry}
      material={material}
      {...meshEvents}
      {...meshOnclick}
      // onPointerLeave={e => alert('left')}
      receiveShadow
      castShadow={hasShadow}
      position={[node.position.x, node.position.y, node.position.z ]}
    >
      {isFacility && (
        <meshStandardMaterial
          // metalness={0.1}
          side={THREE.DoubleSide}
          attach='material'
          color={lookAndFeelControls['Building']}
          transparent
          opacity={1}
        />
      )}
      {isClicked && isSignificantFacility && (
        <Label
          id={node.name}
          text={findFacility(facilityId).name}
          hoverName={hoverName}
          isClicked={isClicked}
        />
      )}
      {isHover && isFacility && (
        <Label
          id={node.name}
          text={findFacility(facilityId).name}
          hoverName={hoverName}
          isClicked={isClicked}
        />
      )}
      )
    </mesh>
  )
}

export default Facility
