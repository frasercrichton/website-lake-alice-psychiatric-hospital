import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Groups from './Groups.jsx'
import Meshes from './Meshes.jsx'
import OSMBuildings from './OSMBuildings.jsx'
import { useRef } from 'react'
// const GLB_LOCATION = process.env.REACT_APP_GLB_LOCATION
const GLB_LOCATION = 'geography-detailed.glb'
const hash = window.location.hash

const HospitalLayout = ({ labels, isRotating, disabledMeshes }) => {
  const group = useRef()

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

  if (hash === '#debug') {
    const cameras = Array.from(Object.values(nodes)).filter(element => {
      return element.type === 'PerspectiveCamera' && element.name !== 'Scene'
    })

    // this outputs Blender nodes and camera config to the console for manual cut and paste config updates
    console.log('Cameras ####################################')
    cameras
      .sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
      .forEach(camera => {
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
      })

    console.log('Nodes ######################################')
    console.log(nodes)
    console.log('Materials ######################################')
    console.log(materials)
    console.log('############################################')
  }

  const groups = Array.from(Object.values(nodes)).filter(node => {
    return node.type === 'Group' && node.name !== 'Scene'
  })

  const meshes = Array.from(Object.values(nodes)).filter(node => {
    // Linked Object Groups have parents that are not the Scene
    return (
      node.type === 'Mesh' &&
      node.parent.name === 'Scene' &&
      node.name !== 'Scene' &&
      node.material.name !== 'buildings'
    )
  })

  const buildings = Array.from(Object.values(nodes)).filter(node => {
    // Linked Object Groups have parents that are not the Scene
    return (
      node.type === 'Mesh' &&
      node.parent.name === 'Scene' &&
      node.name !== 'Scene' &&
      node.material.name === 'buildings'
    )
  })

  return (
    <group ref={group}>
      <Meshes meshes={meshes} disabledMeshes={disabledMeshes} />
      <Groups groups={groups} disabledMeshes={disabledMeshes} />
      <OSMBuildings meshes={buildings} />
    </group>
  )
}

export default HospitalLayout
