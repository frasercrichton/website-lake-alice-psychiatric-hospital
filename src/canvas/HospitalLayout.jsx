import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import Facility from './Facility'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const deg2rad = degrees => degrees * (Math.PI / 180)

const HospitalLayout = ({ selectedFacility, setSelectedFacility }) => {
  const group = useRef()

  const [hoverName, setHoverName] = useState('')

  const isClicked = selectedFacility !== ''

  const { nodes, materials } = useLoader(
    GLTFLoader,
    CDN_URL + FOLDER + 'lake-alice-geography.gltf'
  )

  const Facilities = () => {
    const hoverAction = (id, e) => {
      if (!isClicked) {
        setHoverName(id)
      }
      console.log(hoverName)
    }

    const isHover = hoverName !== ''

    useEffect(() => {
      document.body.style.cursor = isHover ? 'pointer' : 'auto'
    }, [isHover])

    useFrame((state, delta) => {
      if (!isClicked) {
        group.current.rotation.y += 0.0005
        // state.camera.rotateZ(150)
        state.camera.position.y = 150
        // state.camera.rotateY(150)
        // state.camera.position.z = 150
        state.camera.lookAt(0, 0, 0)
      }
      // state.camera.rotation.set(deg2rad(90), 180, -90)
      // fov: 45
      // state.camera.fov = 10
      // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
      // this changes when camera position changes
      // move this to first and then rotate?

      if (isClicked) {
        setHoverName(selectedFacility)

        const meshPosition = nodes[selectedFacility + '_Annotation'].position
        // state.camera.lookAt(meshPosition)
        // point: Object { x: -72.13823503671475, y: 4.039927482604997, z: -66.19582777585103 }
        // const vec = new THREE.Vector3(
        //   meshPosition.x + 10,
        //   meshPosition.y + 10,
        //   meshPosition.z + 10
        // )

        // state.camera.position.lerp(vec, 0.001)
        // state.camera.updateProjectionMatrix()
      }
      state.camera.updateProjectionMatrix()
    })

    const output = Object.keys(nodes).map((key, index) => (
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
    ))
    return output
  }

  const ZoomIn = () => {
    const vec = new THREE.Vector3(0, 5, 30)
    return useFrame(({ camera }) => {
      if (!isClicked) {
        return camera.position.lerp(vec, 0.001)
      }
    })
  }

  return (
    <group ref={group} dispose={null} scale={0.3}>
      <Facilities />
      <OrbitControls
        enableZoom
        enableRotate
        maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Math.PI / 4}
        minPolarAngle={0}
        maxDistance={400}
        minDistance={50}
      />
      <ZoomIn />
    </group>
  )
}

export default HospitalLayout
