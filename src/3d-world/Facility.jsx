import React, { useRef, useMemo } from 'react'
import './Facility.css'
import Label from './Label.jsx'
import facilities from '../config/facilities.json'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import * as THREE from 'three'

const Facility = ({ node, material, label }) => {
  const mesh = useRef()

  const facilityId = node.name
  const hasShadow = !(node.name === 'Road' || node.name === 'Lakes')

  const findFacility = id => facilities.find(facility => facility.id === id)

  const isSignificantFacility =
    typeof findFacility(facilityId) !== 'undefined' &&
    findFacility(facilityId).type === 'significant'

  const isFacility = typeof findFacility(facilityId) !== 'undefined'

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

  return (
    <mesh
      // TODO scale?
      ref={mesh}
      name={facilityId}
      geometry={node.geometry}
      material={node.material}
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

      <Label id={node.name} text={label} position={[node.position.x, node.position.y, node.position.z]}
      />
    </mesh>
  )
}

export default Facility
