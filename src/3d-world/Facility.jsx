import React, { useRef } from 'react'
import './Facility.css'
import Label from './Label.jsx'
import facilities from '../config/facilities.json'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
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

  const materialX = new THREE.MeshPhongMaterial({
    color: 0xff0000, // red (can also use a CSS color string here)
    flatShading: true
  })

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
  const y = hasShadow ? node.position.y - 0.5 : node.position.y

  // console.log(node.material)
  return (
    <mesh
      // TODO scale?
      ref={mesh}
      name={facilityId}
      geometry={node.geometry}
      material={node.material}
      {...meshEvents}
      {...meshOnclick}
      // onPointerLeave={e => alert('left')}
      side={THREE.FrontSide}
      receiveShadow
      castShadow={hasShadow}
      position={[node.position.x, y, node.position.z]}
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
