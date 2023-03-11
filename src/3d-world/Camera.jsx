import React from 'react'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import angleToRadians from './angleHelper'
import CameraControls from '../controls/CameraControls'
import { Globals } from '@react-spring/shared'
Globals.assign({
  frameLoop: 'always'
})
// https://codesandbox.io/s/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=/src/App.js:1189-1199

// position: new THREE.Vector3(
//   camera.position[0],
//   camera.position[1],
//   camera.position[2]
// ),
// A default perspective camera: fov: 75, near: 0.1, far: 1000, z: 5, lookAt: [0,0,0]
const hash = window.location.hash

const getFromQuaternion = (currentCamera) => {
  const fromQuaternion = new THREE.Quaternion()
  fromQuaternion.copy(currentCamera.quaternion)
  return fromQuaternion
}

const getToQuaternion = (pageCamera) => {
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

const Camera = ({
  pageCamera,
  cameraMoveDuration = 2000,
  pageScrollProgress
}) => {
  const currentCamera = useThree(state => state.camera)
  // controls = new THREE.OrbitControls( camera, renderer.domElement )
  // state.camera.lookAt(0, 0, 0)
  // const AnimatedPerspectiveCamera = animated(PerspectiveCamera)  
    
  useFrame((state, delta) =>
  {

  // cameraMoveDuration = 2000,
console.log('state.clock.elapsedTime', state.clock.elapsedTime)

    console.log('delta', delta)

    })



  const springs = useSpring({
    from: { alpha: 0 },
    alpha: 1,
    config: { duration: cameraMoveDuration },
    position: pageCamera.position,
    reset: true,
    onChange (cont) {
      // console.log('fromQuat', fromQuat)
      // console.log('toQuat', toQuat)
      // // camera.zoom = 2
      // fov
      // camera.fov = cont.value.fov;
      const fromQuat = getFromQuaternion(currentCamera)
      const toQuat = getToQuaternion(pageCamera)
      currentCamera.quaternion.slerpQuaternions(
        fromQuat,
        toQuat,
        cont.value.alpha
      )
      currentCamera.updateProjectionMatrix()
    }
  })

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
    <animated.group position={springs.position}>
      <PerspectiveCamera
        makeDefault
        aspect={pageCamera.aspect}
        fov={pageCamera.fov}
        near={pageCamera.near}
        far={pageCamera.far}
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
          autoRotate
          autoRotateSpeed={0.3}

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
    </animated.group>
  )
}

export default Camera
