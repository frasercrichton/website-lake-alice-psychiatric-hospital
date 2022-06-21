import React, { useRef } from 'react'
import './Facility.css'
import Label from './Label'
import facilities from '../data/facilities.json'

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
  const facilityId = node.name.replace('_Annotation', '')

  const findFacility = id => facilities.find(facility => facility.id === id)
  const isSignificantFacility =
    typeof findFacility(facilityId) !== 'undefined' &&
    findFacility(facilityId).type === 'significant'
  const isFacility = typeof findFacility(facilityId) !== 'undefined'

  const isHover = facilityId === hoverName
  const isClicked = facilityId === selectedFacility
  const isActive = isClicked || isHover
  const meshEvents = isFacility
    ? {
        onPointerOver: e => hoverAction(facilityId, e),
        onPointerOut: e => hoverAction('', e)
      }
    : null

  const meshOnclick = isSignificantFacility
    ? {
        onClick: e => setSelectedFacility(facilityId)
      }
    : null

  return (
    <mesh
      ref={mesh}
      name={facilityId}
      geometry={node.geometry}
      material={material}
      {...meshEvents}
      {...meshOnclick}
      
      // onPointerLeave={e => alert('left')}
    >
      {isFacility && (
        <meshStandardMaterial
          metalness={0.1}
          attach='material'
          color={isActive ? '#ec407a' : '#a2a2a2'}
          transparent
          opacity={isActive ? 0.5 : 1}
        />
      )}
      {isClicked && isAnnotation && isSignificantFacility && (
        <Label
          id={node.name}
          text={findFacility(facilityId).name}
          hoverAction={hoverAction}
          hoverName={hoverName}
          setSelectedFacility={setSelectedFacility}
          isClicked={isClicked}
          position={[node.position.x, node.position.y, node.position.z]}
        />
      )}
      )
      {isHover && isFacility && isAnnotation && (
        <Label
          id={node.name}
          text={findFacility(facilityId).name}
          hoverAction={hoverAction}
          hoverName={hoverName}
          setSelectedFacility={setSelectedFacility}
          isClicked={isClicked}
          position={[node.position.x, node.position.y, node.position.z]}
        />
      )}
      )
    </mesh>
  )
}

export default Facility
