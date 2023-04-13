import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import angleToRadians from './angleHelper'
import CameraControls from '../controls/CameraControls'
import { Globals } from '@react-spring/shared'
import gsap from 'gsap'

Globals.assign({
  frameLoop: 'always'
})
// https://codesandbox.io/s/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=/src/App.js:1189-1199

const hash = window.location.hash

const Camera = ({
  pageCamera,
  cameraMoveDuration = 2000,
  pageScrollProgress
}) => {
  const size = { width: window.innerWidth, height: window.innerHeight }

  const camAspectRatio = 16 / 9 // check if this is always the case

  // A default perspective camera: fov: 75, near: 0.1, far: 1000, z: 5, lookAt: [0,0,0]
  const defaultCameraConfig = {
    name: 'default',
    position: [0, 600, 400],
    rotation: [-0.8726646, 0, 0],
    aspect: size.height / size.width,
    fov: 80,
    near: 10,
    far: 10000,
    focus: 2
    // aspect: 1.7777777777777777,
    // fov: 39.76070325000613,
    // near: 10,
    // far: 10000
  }

  const cameraGroup = useRef()
  const currentCamera = useThree(state => state.camera)
  const clock = useThree(state => state.clock)

  const getFromQuaternion = currentCamera => {
    const fromQuaternion = new THREE.Quaternion()
    fromQuaternion.copy(currentCamera.quaternion)
    return fromQuaternion
  }

  const getToQuaternion = pageCamera => {
    const toQuaternion = new THREE.Quaternion()
    toQuaternion.setFromEuler(
      new THREE.Euler(
        pageCamera.rotation[0],
        pageCamera.rotation[1],
        pageCamera.rotation[2],
        'XYZ'
      )
    )
    return toQuaternion
  }

  const fov = pageCamera ? pageCamera.fov : defaultCameraConfig.fov
  const near = pageCamera ? pageCamera.near : defaultCameraConfig.near
  const far = pageCamera ? pageCamera.far : defaultCameraConfig.far

  // controls = new THREE.OrbitControls( camera, renderer.domElement )
  // state.camera.lookAt(0, 0, 0)
  // const AnimatedPerspectiveCamera = animated(PerspectiveCamera)

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

  // const ZoomIn = () => {
  //   return useFrame(({ camera }) => {
  //     let cameraDistance = orbitControlesRef.current.getDistance()

  //     console.log('x', cameraDistance)
  //     if (cameraDistance > 280) {
  //       let polarAngle = orbitControlesRef.current.getPolarAngle()

  //       orbitControlesRef.current.maxDistance = cameraDistance -= 0.1
  //       orbitControlesRef.current.setPolarAngle((polarAngle += 0.003))
  //       orbitControlesRef.current.update()
  //     }
  //   })
  // }

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
      {hash === '#debug' && (
        <OrbitControls
          camera={currentCamera}
          // enableZoom
          // enableRotate
          maxDistance={5000}
          minDistance={10}
          // maxZoom={1}
          // zoom
          // autoRotate
          // autoRotateSpeed={0.3}
          // enableDamping
          // dampingFactor={0.01}
          // maxAzimuthAngle={Math.PI / 4}
          // minAzimuthAngle={Math.PI / 2}
          // maxPolarAngle={angleToRadians(80)}
          // minPolarAngle={angleToRadians(30)}
          // makeDefault
          // // ref={orbitControlesRef}
          // target == camera.lookat
          // minZoom
          // // zoom0
          // zoomSpeed={0.3}
          // update
        />
      )}
    </group>
  )
}

export default Camera
