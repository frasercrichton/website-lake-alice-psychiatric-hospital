import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import Mesh from './Mesh'

const deg2rad = degrees => degrees * (Math.PI / 180)

const Plan = props => {
  const group = useRef()

  const [hoverName, setHoverName] = useState('')
  const [clicked, setClicked] = useState(null)

  const isClicked = clicked !== null

  const { nodes, materials } = useLoader(
    GLTFLoader,
    '/lake-alice-geography.gltf'
  )

  const Facilities = () => {
    const hoverAction = id => {
      setHoverName(id)
    }

    useFrame((state, delta) => {
      console.log(clicked)

      if (!isClicked) {
        group.current.rotation.y += 0.0005
        state.camera.rotateZ(150)
        state.camera.position.y = 150
      }
      // state.camera.rotation.set(deg2rad(90), 180, -90)
      // fov: 45
      // state.camera.fov = 10
      // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
      // this changes when camera position changes
      // move this to first and then rotate?
      state.camera.lookAt(0, 0, 0)

      state.camera.updateProjectionMatrix()
      if (isClicked) {
        state.camera.lookAt(
          clicked.mesh.point.x,
          clicked.mesh.point.y,
          clicked.mesh.point.z
        )
        // point: Object { x: -72.13823503671475, y: 4.039927482604997, z: -66.19582777585103 }
        const vec = new THREE.Vector3(
          clicked.mesh.point.x - 0.1,
          clicked.mesh.point.y,
          clicked.mesh.point.z
        )

        state.camera.position.lerp(vec, 0.01)
        // state.camera.updateProjectionMatrix()
      }
    })

    const output = Object.keys(nodes).map((key, index) => (
      <Mesh
        key={index}
        node={nodes[key]}
        material={nodes[key].material}
        defaultMaterial={materials.selected}
        clicked={clicked}
        setClicked={setClicked}
        hoverAction={hoverAction}
        hoverName={hoverName}
      />
    ))
    return output
  }

  const ZoomIn = () => {
    const vec = new THREE.Vector3(0, 15, 30)
    return useFrame(({ camera }) => camera.position.lerp(vec, 0.001))
  }

  return (
    <group ref={group} {...props} dispose={null} scale={0.3}>
      <Facilities />
      <OrbitControls />
      <ZoomIn />
    </group>
  )
}

export default Plan
