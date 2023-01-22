import React, { Suspense } from 'react'
import './Canvas.css'
import ThreeLoader from './ThreeLoader'
import { Canvas } from '@react-three/fiber'
import HospitalLayout from './HospitalLayout'
import Camera from './Camera'
import LookAndFeelControls from '../controls/LookAndFeel'
import { Globals } from '@react-spring/shared'
import * as THREE from 'three'
import Environment from './Environment'
import Floor from './Floor'
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
}) => {
  const aspectRatio = {
    width: 1920,
    height: 1080
  }
  const hash = window.location.hash

  const lookAndFeelControls = LookAndFeelControls()
  const defaultOutputEncoding = THREE.sRGBEncoding
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  return (
    <div className='canvas-wrapper' style={{ height: '100%', width: '100%' }}>
      <Canvas
        colormanagement='true'
        shadows
        gl={{
          antialias: true,
          alpha: true,
          physicallyCorrectLights: true,
          outputEncoding: defaultOutputEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
          pixelRatio: Math.min(window.devicePixelRatio, 2),
          clearColor: lookAndFeelControls['World'],
          shadowMap: {autoUpdate: false, needsUpdate: true}, // static scene where lights don't move no need to update
          sizes: sizes,
        }}
        onPointerMissed={() => handleCanvasClick()}
      >
        {/*           
                  antialias: true, - only add if there is antialiasing needed
        powerPreference: 'high-performance',  only set if there are frane rate issues */}
        <Camera camera={camera} />
        <color args={[lookAndFeelControls['World']]} attach='background' />
        <Suspense fallback={<ThreeLoader />}>
          <Environment />
          <Floor />
          <HospitalLayout
            selectedFacility={selectedFacility}
            handleFacilityClick={handleFacilityClick}
            hoverName={hoverName}
            setHoverName={setHoverName}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CanvasWrapper
