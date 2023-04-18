import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Groups from './Groups.jsx'
import Meshes from './Meshes.jsx'
import Labels from './Labels.jsx'
import OSMBuildings from './OSMBuildings.jsx'
import * as THREE from 'three'
// If you create a material or color in global space - outside of React Three Fiber's Canvas context - you should enable ColorManagement in three.js.
THREE.ColorManagement.enabled = true
THREE.ColorManagement.legacyMode = false
// const GLB_LOCATION = process.env.REACT_APP_GLB_LOCATION
const GLB_LOCATION = 'geography-detailed.glb'
const hash = window.location.hash
// TODO work out why this needs defined in the function

const staticMaterials = {
  roads: new THREE.MeshStandardMaterial({
    name: 'roads',
    color: '#585858',
    roughness: 1,
    metalness: 0,
    flatShading: false
  }),
  'lake-surface': new THREE.MeshStandardMaterial({
    name: 'lake-surface',
    color: 0xc000000,
    roughness: 0.31599998474121094,
    metalness: 0.42399996519088745,
    flatShading: false
  }),
  roofs: new THREE.MeshStandardMaterial({
    name: 'roofs',
    color: '#4f666a',
    side: THREE.DoubleSide,
    roughness: 0.5,
    metalness: 0,
    flatShading: false
  }),
  walls: new THREE.MeshStandardMaterial({
    name: 'walls',
    color: 0xcccccc,
    side: THREE.DoubleSide,
    flatShading: true
  }),
  floors: new THREE.MeshStandardMaterial({
    name: 'floors',
    color: '#4f666a',
    side: THREE.DoubleSide,
    roughness: 0.5,
    metalness: 0,
    flatShading: false
  }),
  buildings: new THREE.MeshStandardMaterial({
    name: 'buildings',
    color: '#d2c1cd',
    roughness: 0.4000000059604645,
    side: THREE.DoubleSide,
    flatShading: true
  }),
  bedframe: new THREE.MeshStandardMaterial({
    name: 'bedframe',
    color: '#343434',
    roughness: 0.4000000059604645,
    side: THREE.DoubleSide,
    flatShading: true
  }),
  mattress: new THREE.MeshStandardMaterial({
    name: 'mattress',
    color: '#ffffff',
    side: THREE.DoubleSide,
    flatShading: true,
    roughness: 0.4000000059604645
  }),

  'interior-walls': new THREE.MeshStandardMaterial({
    name: 'interior-walls',
    color: '#ffffff',
    side: THREE.DoubleSide,
    flatShading: true,
    roughness: 0.4000000059604645
  }),
  ExteriorWalls: new THREE.MeshStandardMaterial({
    name: 'default',
    color: '#d2c1cd',
    side: THREE.DoubleSide,
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
    side: THREE.DoubleSide,
    roughness: 0.4000000059604645
  })
}

const Model = ({ labels, isRotating, disabledMeshes }) => {
  const group = useRef()

  useEffect(() => {
    // if (facilityId.includes('20')) {
    // console.log('xxxx', facilityId)
    // }
    // if (disabledMeshes && disabledMeshes.includes(facilityId)) {
    //   disabledMeshes.forEach(element => {
    //     if (mesh.current.name.includes(element)) {
    //       mesh.current.material = materials.transparent
    //       mesh.current.material.needsUpdate = true
    //     }
    //   })
    // }
  }, []) //pagechange

  useFrame((state, delta) => {
    // isRotating
    //   ? (group.current.rotation.y += delta * 0.2)
    //   : (group.current.rotation.y = 0)
  })

  const { nodes } = useLoader(GLTFLoader, GLB_LOCATION, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
  })

  const getMaterial = name => {
    console.log(name)

    if (name !== undefined) {
      console.log(name)
    }

    // if (disabledMeshes !== undefined && node.material.name.includes('ElevenBedVilla')) {
    //   console.log(disabledMeshes.includes(node.material.name))
    // }

    const materialName = name === undefined ? '' : name.split('.')[0]
    // console.log('getMaterial', material)
    // console.log(
    //   'getMaterial the material',
    //   material !== '' ? materials[material] : materials.default
    // )

    return materialName !== ''
      ? staticMaterials[materialName]
      : staticMaterials.default
  }

  const createMeshesFromChildren = group => {
    const parentName = group.name
    const position = group.position
    const rotation = group.rotation
    const childWithPosition = group.children.map(element => {
      const nameSuffix = element.name.split('_')[1]
      const childName = nameSuffix === undefined ? '' : nameSuffix
      const name = `${parentName}_${childName}`

      return {
        ...element,
        ...{
          position: position,
          rotation: rotation,
          name: name,
          material: getMaterial(element.material.name)
        }
      }
    })
    return childWithPosition
  }

  const modelMeshes = useMemo(() => {
    const nodeModel = {
      groups: [],
      meshes: [],
      buildings: [],
      labels: []
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
        // console.log('group: ', node)
        // const x = getMaterial(node)
        // node.material = x

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
    })

    return (
      <>
        <Meshes meshes={nodeModel.meshes} labels={labels} />
        <Labels empties={nodeModel.labels} labels={nodeModel.labels} />

        <Groups
          groups={nodeModel.groups}
          disabledMeshes={disabledMeshes}
          labels={labels}
        />
        {/* 
        <Groups
          groups={nodeModel.groups}
          disabledMeshes={disabledMeshes}
          labels={labels}
        /> */}
        <OSMBuildings meshes={nodeModel.buildings} labels={labels} />
      </>
    )
  }, [nodes, createMeshesFromChildren])

  // if (hash === '#debug') {
  //   const cameras = Array.from(Object.values(nodes)).filter(element => {
  //     return element.type === 'PerspectiveCamera' && element.name !== 'Scene'
  //   })

  //   // this outputs Blender nodes and camera config to the console for manual cut and paste config updates
  //   console.log('Cameras ####################################')
  //   cameras
  //     .sort(function (a, b) {
  //       return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  //     })
  //     .forEach(camera => {
  //       const cameraConfig = {
  //         name: camera.name,
  //         position: [camera.position.x, camera.position.y, camera.position.z],
  //         rotation: [
  //           camera.rotation._x,
  //           camera.rotation._y,
  //           camera.rotation._z
  //         ],
  //         aspect: camera.aspect,
  //         fov: camera.fov,
  //         near: camera.near,
  //         far: camera.far
  //       }
  //       console.log(cameraConfig)
  //     })

  //   console.log('Nodes ######################################')
  //   console.log(nodes)
  //   // console.log('Materials ######################################')
  //   // console.log(materials)
  //   console.log('############################################')
  // }

  return <group ref={group}>{modelMeshes}</group>
}

export default Model
