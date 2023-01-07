import React, { useRef } from 'react'
import * as THREE from 'three'
import { useSpring, animated, config } from '@react-spring/three'
import { OrbitControls, Environment } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import angleToRadians from './angleHelper'
import { Globals } from '@react-spring/shared'
Globals.assign({
  frameLoop: 'always'
})

// fov — Camera frustum vertical field of view.
// aspect — Camera frustum aspect ratio.
// near — Camera frustum near plane.
// far — Camera frustum far plane.
const Camera = ({ camera: activeCamera }) => {
  const cameraRef = useRef(null)
  const orbitControlesRef = useRef(null)
  // const quaternion = new THREE.Quaternion(
  //   activeCamera.quaternion.x,
  //   activeCamera.quaternion.y,
  //   activeCamera.quaternion.z,
  //   activeCamera.quaternion.w
  // )

  const { camera } = useThree()
  const fromQuat = new THREE.Quaternion()
  const toQuat = new THREE.Quaternion()
  fromQuat.copy(camera.quaternion)

  const euler = new THREE.Euler(
    activeCamera.rotation[0],
    activeCamera.rotation[1],
    activeCamera.rotation[2],
    'XYZ'
  )
  toQuat.setFromEuler(activeCamera.rotation)

  const springs = useSpring({
    alpha: 1,
    config: { duration: 3000 },
    from: { alpha: 0 },
    position: activeCamera.position,
    rotation: camera.rotation,

    onChange (cont) {
      // fov
      // camera.fov = cont.value.fov;
      // rotation
      camera.quaternion.slerpQuaternions(fromQuat, toQuat, cont.value.alpha)

      camera.updateProjectionMatrix()
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
        ref={cameraRef}
        makeDefault
        rotation={activeCamera.rotation}
        aspect={activeCamera.aspect}
        fov={activeCamera.fov}
        near={activeCamera.near}
        far={activeCamera.far}
      />

      {/* <OrbitControls
        // camera={cameraRef}
        // makeDefault
        autoRotate
        autoRotateSpeed={0.3}
        ref={orbitControlesRef}
        // target == camera.lookat
        enableZoom
        enableRotate
        enableDamping
        dampingFactor={0.01}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={Math.PI / 2}
        maxPolarAngle={angleToRadians(80)}
        minPolarAngle={angleToRadians(30)}
        maxDistance={600}
        minDistance={10}

        // maxZoom={10}
        // minZoom
        // // zoom0
        // zoomSpeed={0.3}
        // update
      /> */}
    </animated.group>
  )
}

export default Camera
