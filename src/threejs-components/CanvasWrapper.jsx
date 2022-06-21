import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import './CanvasWrapper.css'
import Loader from './Loader'
import { Canvas, useFrame } from '@react-three/fiber'
import HospitalLayout from './HospitalLayout'
import angleToRadians from './angleHelper'
import { Environment, OrbitControls } from '@react-three/drei'

const CanvasWrapper = ({
  selectedFacility,
  setSelectedFacility,
  hoverName,
  setHoverName
}) => {
  const orbitControlesRef = useRef(null)

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

  return (
    <div style={{ height: '100%' }}>
      <Canvas camera={{ position: [0, 500, 400] }}>
        <Suspense fallback={<Loader />}>
          <pointLight position={[0, 200, 500]} castShadow />
          <ambientLight
            intensity={0.2}
            penumbra={1}
            position={[0, 0, 600]}
            castShadow
          />
          <HospitalLayout
           orbitControlesRef={orbitControlesRef}
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
            hoverName={hoverName}
            setHoverName={setHoverName}
          />
        </Suspense>
        <OrbitControls
          ref={orbitControlesRef}
          // target == camera.lookat
          enableZoom
          enableRotate
          enableDamping
          dampingFactor={0.01}
          // maxAzimuthAngle={Math.PI/4}
          // minAzimuthAngle={Math.PI / 2}
          maxPolarAngle={angleToRadians(80)}
          minPolarAngle={angleToRadians(30)}
          maxDistance={600}
          minDistance={50}
          autoRotate
          autoRotateSpeed={0.3}
          maxZoom={10}
          // minZoom
          // zoom0
          // zoomSpeed={0.3}
          // update
        />
        <Environment preset='sunset' />
        <ZoomIn />
      </Canvas>
    </div>
  )
}

export default CanvasWrapper
