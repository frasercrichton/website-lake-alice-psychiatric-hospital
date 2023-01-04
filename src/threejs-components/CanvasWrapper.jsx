import React, { Suspense, useRef } from 'react'
import './CanvasWrapper.css'
import ThreeLoader from './ThreeLoader'
import { Canvas, useFrame } from '@react-three/fiber'
import HospitalLayout from './HospitalLayout'
import { PerspectiveCamera } from 'three'
import CameraControls from '../controls/CameraControls'
import {
  Environment,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Center
} from '@react-three/drei'
import LookAndFeelControls from '../controls/LookAndFeel'

const CanvasWrapper = ({
  selectedFacility,
  handleFacilityClick,
  hoverName,
  setHoverName,
  handleCanvasClick,
  camera
}) => {
  const boxRef = useRef(null)
  const perspectiveCameraRef = useRef(null)
  const orbitControlesRef = useRef(null)

  // https://codesandbox.io/s/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=/src/App.js:1189-1199
  const ZoomIn = () => {
    return useFrame(({ camera }) => {
      let cameraDistance = orbitControlesRef.current.getDistance()

      if (cameraDistance > 280) {
        let polarAngle = orbitControlesRef.current.getPolarAngle()

        orbitControlesRef.current.maxDistance = cameraDistance -= 0.1
        orbitControlesRef.current.setPolarAngle((polarAngle += 0.003))
        orbitControlesRef.current.update()
      }
    })
  }

  const aspectRatio = {
    width: 1920,
    height: 1080
  }

  const shadowPosition = [0, 100, 200]

  // fov — Camera frustum vertical field of view.
  // aspect — Camera frustum aspect ratio.
  // near — Camera frustum near plane.
  // far — Camera frustum far plane.

  const perspectiveCamera = new PerspectiveCamera(
    10,
    aspectRatio.width / aspectRatio.height,
    50,
    200
  )

  const cameraControls = CameraControls(perspectiveCameraRef)
  const lookAndFeelControls = LookAndFeelControls(perspectiveCameraRef)

  if (perspectiveCameraRef.current != null) {
    perspectiveCameraRef.current.rotation.x = cameraControls.Rotation.x
    perspectiveCameraRef.current.rotation.y = cameraControls.Rotation.y
    perspectiveCameraRef.current.rotation.z = cameraControls.Rotation.z
  }

  return (
    <div className='canvas-wrapper' style={{ height: '100%', width: '100%' }}>
      <Canvas
        shadows
        camera={{ position: [0, 500, 400] }}
        onPointerMissed={() => handleCanvasClick()}
      >
        {/* , fov: 25, fov: 25 */}

        <color args={['grey']} attach='background' />
        <fog attach='fog' color={'red'} far={10000000} near={100000} />
        <Suspense fallback={<ThreeLoader />}>
          {/* <ambientLight intensity={1} /> */}
          <spotLight
            intensity={1}
            position={shadowPosition}
            castShadow
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
            near={0.4}
          />
          <group
            ref={perspectiveCameraRef}
            position={[
              cameraControls.Position.x,
              cameraControls.Position.y,
              cameraControls.Position.z
            ]}
          >
            <cameraHelper args={[perspectiveCamera]} />
          </group>

          <mesh
            position-y={-2}
            rotation-x={-Math.PI * 0.5}
            scale={10000}
            receiveShadow
          >
            <planeGeometry />
            <meshStandardMaterial color={lookAndFeelControls['Background Colour']} />
          </mesh>
          <Center ref={boxRef} top position={[2.5, 10, 100]}>
            <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[50, 50, 50]} />
              <meshStandardMaterial color='indianred' />
            </mesh>
          </Center>

          {/* penumbra={1} */}
          <HospitalLayout
            orbitControlesRef={orbitControlesRef}
            selectedFacility={selectedFacility}
            handleFacilityClick={handleFacilityClick}
            hoverName={hoverName}
            setHoverName={setHoverName}
            camera={camera}
          />
        </Suspense>
        {/* <OrbitControls
          // autoRotate
          // autoRotateSpeed={0.3}
          ref={orbitControlesRef}
          // target == camera.lookat
          enableZoom
          // enableRotate
          enableDamping
          dampingFactor={0.01}
          // maxAzimuthAngle={Math.PI/4}
          // minAzimuthAngle={Math.PI / 2}
          // maxPolarAngle={angleToRadians(80)}
          // minPolarAngle={angleToRadians(30)}
          maxDistance={600}
          minDistance={10}

          // maxZoom={10}
          // minZoom
          // zoom0
          // zoomSpeed={0.3}
          // update
        /> */}

        <Environment preset='park' />
        {/* <ZoomIn /> */}
      </Canvas>
    </div>
  )
}

export default CanvasWrapper
