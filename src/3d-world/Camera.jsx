import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import gsap from 'gsap'

// https://codesandbox.io/s/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=/src/App.js:1189-1199

// https://attackingpixels.com/tips-tricks-optimizing-three-js-performance/
// let FOV
// let FAR
// let NEAR = 400

// // Mobile camera
// if (window.innerWidth <= 768) {
//   FOV = 50
//   FAR = 1200
//   // 769px - 1080px screen width camera
// } else if (window.innerWidth >= 769 && window.innerWidth <= 1080) {
//   FOV = 50
//   FAR = 1475
//   // > 1080px screen width res camera
// } else {
//   FOV = 40
//   FAR = 1800
// }

const euler = new THREE.Euler(0, 0, 0, 'XYZ')
const toQuaternion = new THREE.Quaternion()
const fromQuaternion = new THREE.Quaternion()
const size = { width: window.innerWidth, height: window.innerHeight }
// A default perspective camera: fov: 75, near: 0.1, far: 1000, z: 5, lookAt: [0,0,0]
const defaultCameraConfig = {
  name: 'default',
  position: [0, 600, 400],
  rotation: [-0.8726646, 0, 0],
  aspect: size.height / size.width,
  fov: 80,
  near: 10,
  far: 1000, //TODO make smaller
  focus: 2
  // aspect: 1.7777777777777777,
  // fov: 39.76070325000613,
  // near: 10,
  // far: 10000
}

const Camera = ({ pageCamera }) => {
  const cameraGroup = useRef()
  const currentCamera = useThree(state => state.camera)
  const clock = useThree(state => state.clock)

  const getFromQuaternion = currentCamera => {
    fromQuaternion.copy(currentCamera.quaternion)
    return fromQuaternion
  }

  const getToQuaternion = pageCamera => {
    euler.set(
      pageCamera.rotation[0],
      pageCamera.rotation[1],
      pageCamera.rotation[2],
      'XYZ'
    )
    toQuaternion.setFromEuler(euler)
    return toQuaternion
  }

  const fov = pageCamera ? pageCamera.fov : defaultCameraConfig.fov
  const near = pageCamera ? pageCamera.near : defaultCameraConfig.near
  const far = pageCamera ? pageCamera.far : defaultCameraConfig.far

  let alpha = 0
  useFrame((state, delta) => {
    if (pageCamera) {
      const fromQuat = getFromQuaternion(currentCamera)
      const toQuat = getToQuaternion(pageCamera)

      currentCamera.quaternion.slerpQuaternions(
        fromQuat,
        toQuat,
        (alpha += 0.05 * delta)
      )
      currentCamera.updateProjectionMatrix()
    }
  })

  useEffect(() => {
    clock.start()

    if (pageCamera) {
      currentCamera.name = pageCamera.name

      gsap.to(cameraGroup.current.position, {
        duration: 3,
        delay: 0,
        x: pageCamera.position[0],
        y: pageCamera.position[1],
        z: pageCamera.position[2]
      })
    }
  }, [pageCamera, clock, currentCamera])

  return (
    <group ref={cameraGroup} position={defaultCameraConfig.position}>
      <PerspectiveCamera
        makeDefault
        name='default'
        rotation={defaultCameraConfig.rotation}
        aspect={defaultCameraConfig.aspect}
        fov={fov}
        near={near}
        far={far}
      />
    </group>
  )
}

export default Camera
