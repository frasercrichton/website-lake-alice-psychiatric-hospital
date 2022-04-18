import React, { useRef, useState, Suspense } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import Mesh from './Mesh'
import './Mesh.css'

const buildings = {
  Maximum_Security_Block: 'Maximum Security Block',
  Administrative_Building: 'Administrative Building',
  Community_Hall: 'Community Hall',
  "Doctors'_Houses": "Doctors' Villas",
  Staff_Quarters: 'Staff Quarters',
  Swimming_Pool: 'Swimming Pool',
  Villa_13: 'Villa 13',
  'Villa_14_-_Disturbed_Patients_Villa': 'Villa 14 - Disturbed Patients Villa',
  Villa_15: 'Villa 15',
  "Villa_7_-_Girls'_Unit": "Villa 7 - Girls' Unit",
  "Villa_8_-__Boys'_Unit": "Villa 8 - Boys' Unit",
  'Villas_9_-_18_Eleven_Bed_Adult_Villas':
    'Villas 9 - 18 Eleven Bed Adult Villas'
}

const Plan = props => {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    '/lake-alice-geography.gltf'
  )
  console.log(nodes)
  const group = useRef()
  const [active, setActive] = useState(false)

  const sites = () => {
    const handleClick = e => {
      console.log(e)
    }

    const output = Object.keys(nodes).map((key, index) => (
      <Mesh
        onClick={handleClick}
        key={index}
        node={nodes[key]}
        material={nodes[key].material}
        defaultMaterial={materials['Material.001']}
      />
    ))
    return output
  }

  useFrame((state, delta) => {
    group.current.rotation.y += 0.001

    state.camera.position.y = 150
    state.camera.rotation.set(0, 0, -90)
    // fov: 45
    // state.camera.fov = 10
    // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })

  return (
    <group ref={group} {...props} dispose={null} scale={0.2}>
      {sites()}
      <OrbitControls />
    </group>
  )
}

export default Plan
