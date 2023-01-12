import React, { Suspense, useRef, useState } from 'react'
import './CanvasWrapper.css'
import ThreeLoader from './ThreeLoader'
import { Canvas, useFrame } from '@react-three/fiber'
import HospitalLayout from './HospitalLayout'
import Camera from './Camera'
import LookAndFeelControls from '../controls/LookAndFeel'
import { Globals } from '@react-spring/shared'
import * as THREE from 'three'
import Lighting from './Lighting'
Globals.assign({
  frameLoop: 'always'
})

const CanvasWrapper = ({
  selectedFacility,
  handleFacilityClick,
  hoverName,
  setHoverName,
  handleCanvasClick,
  camera,
  cameras
}) => {
  // https://codesandbox.io/s/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=/src/App.js:1189-1199

  const aspectRatio = {
    width: 1920,
    height: 1080
  }

  const onCreated = ({ gl, scene }) => {
    gl.setClearColor('#202020')
    gl.setPixelRatio(window.devicePixelRatio)
    gl.toneMapping = THREE.ReinhardToneMapping //THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding
  }

  const lookAndFeelControls = LookAndFeelControls()

  return (
    <div className='canvas-wrapper' style={{ height: '100%', width: '100%' }}>
      <Canvas
        colorManagement
        shadows={{ type: THREE.BasicShadowMap }}
        gl={{ antialias: true, alpha: true }}
        onCreated={onCreated}
        onPointerMissed={() => handleCanvasClick()}
      >
        <Camera camera={camera} />
        <color args={[lookAndFeelControls['World']]} attach='background' />
        <fog attach='fog' color={'red'} far={10000000} near={100000} />
        <Suspense fallback={<ThreeLoader />}>
          <Lighting />
          <mesh
            position-y={-2}
            rotation-x={-Math.PI * 0.5}
            scale={10000}
            receiveShadow
          >
            <planeGeometry />
            <meshStandardMaterial color={lookAndFeelControls['Ground']} />
          </mesh>

          {/* penumbra={1} */}
          <HospitalLayout
            selectedFacility={selectedFacility}
            handleFacilityClick={handleFacilityClick}
            hoverName={hoverName}
            setHoverName={setHoverName}
            cameras={cameras}
          />
        </Suspense>
        {/* <Environment preset='park' /> */}
      </Canvas>
    </div>
  )
}

export default CanvasWrapper
