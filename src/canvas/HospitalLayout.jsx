import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Facility from './Facility'
import * as THREE from 'three'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const HospitalLayout = ({ selectedFacility, setSelectedFacility }) => {
  const group = useRef()

  // const { nodes, materials } = useLoader(
  //   GLTFLoader,
  //   CDN_URL + FOLDER + 'lake-alice-geography.gltf'
  // )

  const { nodes, materials } = useLoader(
    GLTFLoader,
    'lake-alice-geography.gltf'
  )
  const [hoverName, setHoverName] = useState('')

  const isClicked = selectedFacility !== ''

  const Facilities = () => {
    const hoverAction = (id, e) => {
      console.log(id)
      if (!isClicked) {
        setHoverName(id)
      }
      // console.log(hoverName)
    }

    // const isHover = hoverName !== ''
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
      linecap: 'round',
      linejoin: 'round'
    })

    const output = Object.keys(nodes).map((key, index) => {
      if (nodes[key].type === 'LineSegments') {
        return (
          <lineSegments geometry={nodes[key].geometry} material={material} />
        )
      }
      // Object3D === annotations so labels only
      if (nodes[key].type === 'Mesh' || nodes[key].type === 'Object3D') {
        return (
          <Facility
            key={index}
            node={nodes[key]}
            material={nodes[key].material}
            defaultMaterial={materials.selected}
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
            hoverAction={hoverAction}
            hoverName={hoverName}
          />
        )
      }

      // }
      return null
    })
    return output
  }

  return (
    <group ref={group} dispose={null} scale={0.4}>
      <Facilities />
    </group>
  )
}

export default HospitalLayout
