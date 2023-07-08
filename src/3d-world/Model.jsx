import React, { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Groups from './Groups.jsx'
import Meshes from './Meshes.jsx'
import OSMBuildings from './OSMBuildings.jsx'
import * as THREE from 'three'

THREE.ColorManagement.enabled = true
// const GLB_LOCATION = process.env.REACT_APP_GLB_LOCATION
const GLB_LOCATION = 'geography-detailed-2023-06-30.glb'
// If you create a material or color in global space - outside of React Three Fiber's Canvas context - you should enable ColorManagement in three.js.

// favour the default THREE.FrontSide over THREE.DoubleSide
const staticMaterials = {
  roofs: new THREE.MeshStandardMaterial({
    name: 'roofs',
    color: '#4f666a',
    roughness: 0.5,
    metalness: 0,
    side: THREE.DoubleSide,
    flatShading: false
  }),
  walls: new THREE.MeshStandardMaterial({
    name: 'walls',
    color: 0xcccccc,
    flatShading: true
  }),
  floors: new THREE.MeshStandardMaterial({
    name: 'floors',
    color: '#4f666a',
    roughness: 0.5,
    metalness: 0,
    flatShading: false
  }),
  buildings: new THREE.MeshStandardMaterial({
    name: 'buildings',
    color: '#d2c1cd',
    roughness: 0.4000000059604645,
    flatShading: true
  }),
  bedframe: new THREE.MeshStandardMaterial({
    name: 'bedframe',
    color: '#343434',
    roughness: 0.4000000059604645,
    flatShading: true
  }),
  mattress: new THREE.MeshStandardMaterial({
    name: 'mattress',
    color: '#ffffff',
    flatShading: true,
    roughness: 0.4000000059604645
  }),
  'interior-walls': new THREE.MeshStandardMaterial({
    name: 'interior-walls',
    color: '#6F7378',
    flatShading: true,
    roughness: 0.4000000059604645
  }),
  ExteriorWalls: new THREE.MeshStandardMaterial({
    name: 'default',
    color: '#d2c1cd',
    roughness: 0.4000000059604645
  }),
  transparent: new THREE.MeshBasicMaterial({
    // less memory
    name: 'transparent',
    color: 0x00ff00,
    transparent: true,
    opacity: 0
  }),
  default: new THREE.MeshStandardMaterial({
    name: 'default',
    color: '#d2c1cd',
    roughness: 0.4000000059604645
  })
}

const Model = ({ labels, isRotating, disabledMeshes }) => {
  const group = useRef()

  useFrame((state, delta) => {
    isRotating
      ? (group.current.rotation.y += delta * 0.2)
      : (group.current.rotation.y = 0)
  })

  //https://codepen.io/Meds/pen/Mbpqox

  // useEffect(() => {
  //   if (isRotating && group !== undefined) {
  //     gsap.to(group.current.rotation, {
  //       duration: 3,
  //       repeat: -1,
  //       yoyo: false,
  //       // ease: Linear.easeNone,
  //       // paused: false,
  //       y: Math.PI * 1
  //     })
  //   }
  // }, [isRotating]) //pagechange

  const { nodes } = useLoader(GLTFLoader, GLB_LOCATION, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
  })

  const getMaterial = name => {
    const materialName = name.split('.')[0]
    return materialName
      ? staticMaterials[materialName]
      : staticMaterials.default
  }

  const modelMeshes = useMemo(() => {
    const nodeModel = {
      groups: [],
      meshes: [],
      buildings: [],
      labels: []
    }

    const updateMesh = (mesh, name) => {
      if (disabledMeshes?.includes(name)) {
        return { ...mesh, disabledMaterial: staticMaterials.transparent }
      }
      return mesh
    }

    const createMeshesFromChildren = group => {
      const parentName = group.name
      const position = group.position
      const rotation = group.rotation
      const childWithPosition = group.children.map(child => {
        const name = `${parentName}_${child.name.split('_')[1] ?? ''}`
        // if (name.includes('16')) {
        //   console.log(name)
        // }
        const mesh = updateMesh(child, name)
        return {
          ...mesh,
          ...{
            position: position,
            rotation: rotation,
            name: name,
            material: getMaterial(child.material.name)
          }
        }
      })
      return childWithPosition
    }

    Array.from(Object.values(nodes)).filter(node => {
      const isLabel = node.type === 'Object3D'
      const isGroup = node.type === 'Group' && node.name !== 'Scene'
      const isMesh =
        node.type === 'Mesh' &&
        node.parent.name === 'Scene' &&
        node.name !== 'Scene'
      const isNotBuildingMesh = isMesh && node.material.name !== 'buildings'
      const isBuilding = isMesh && node.material.name === 'buildings'

      if (isGroup) {
        nodeModel.groups = [...nodeModel.groups, createMeshesFromChildren(node)]
      }
      if (isLabel) {
        nodeModel.labels = [...nodeModel.labels, node]
      }
      if (isBuilding) {
        nodeModel.buildings = [...nodeModel.buildings, node]
      }
      if (isNotBuildingMesh) {
        nodeModel.meshes = [...nodeModel.meshes, node]
      }
      return null
    })

    return (
      <>
        <Meshes meshes={nodeModel.meshes} labels={labels} />
        {/* ### 18 - Mutualize geometries
If you have multiple [Meshes] using the same geometry shape, create only one geometry, and use it on all the meshes: */}
        <Groups
          groups={nodeModel.groups}
          disabledMeshes={disabledMeshes}
          labels={labels}
        />

        <OSMBuildings meshes={nodeModel.buildings} labels={labels} />
      </>
    )
  }, [nodes, labels, disabledMeshes])

  if (window.location.hash === '#debug') {
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
    console.log('############################################')
  }

  return <group ref={group}>{modelMeshes}</group>
}

export default Model
