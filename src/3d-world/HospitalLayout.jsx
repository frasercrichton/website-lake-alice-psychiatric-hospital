import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import facilities from '../config/facilities.json'
import Facility from './Facility.jsx'
import { useRef } from 'react'
// const GLB_LOCATION = process.env.REACT_APP_GLB_LOCATION
const GLB_LOCATION = 'geography-detailed.glb'
const hash = window.location.hash

const findFacility = id => {
  const x = facilities.find(facility => facility.id === id)
  return x?.type === 'significant' ? x : ''
}

const HospitalLayout = ({ labels, isRotating,
  disabledMeshes }) => {
  const group = useRef()
  // const visibleTodos = useMemo(
  //   () => filterTodos(todos, tab),
  //   [todos, tab``]
  // )

  useFrame((state, delta) => {
    isRotating
      ? (group.current.rotation.y += delta * 0.2)
      : (group.current.rotation.y = 0)
  })

  const { nodes, materials } = useLoader(GLTFLoader, GLB_LOCATION, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
  })

  //  TODO - create building material etc once and pass the reference
  const Facilities = () => {

    const output = Object.keys(nodes).map((key, index) => {
      if (hash === '#debug') {
        // this outputs Blender camera config to the console for manual cut and paste config updates
        if (nodes[key].type === 'PerspectiveCamera') {
          const camera = nodes[key]

          const cameraConfig = {
            name: camera.name,
            position: [camera.position.x, camera.position.y, camera.position.z],
            rotation: [
              camera.rotation._x,
              camera.rotation._y,
              camera.rotation._z
            ],
            aspect: camera.aspect,
            fov: camera.fov,
            near: camera.near,
            far: camera.far
          }
          console.log(cameraConfig)
        }
      }
      if (nodes[key].type === 'Mesh') {
        return (
          <Facility
            key={index}
            node={nodes[key]}
            label={findFacility(nodes[key].name).name}
            defaultMaterial={materials.selected}
            disabledMeshes={disabledMeshes}
          />
        )
      }
      return null
    })
    return output
  }

  return (
    <group ref={group}>
      <Facilities />
    </group>
  )
}

export default HospitalLayout
