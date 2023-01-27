import React from 'react'
import './Canvas.css'
import { Canvas } from '@react-three/fiber'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import { Globals } from '@react-spring/shared'
import * as THREE from 'three'
import Experience from './Experience'
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
  isRotating
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
        dpr={[1, 2]} //the default
        gl={{
          antialias: true,
          alpha: true,
          physicallyCorrectLights: true,
          outputEncoding: defaultOutputEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
          shadowMap: { autoUpdate: false, needsUpdate: true }, // static scene where lights don't move no need to update
          sizes: sizes
        }}
        onPointerMissed={() => handleCanvasClick()}
      >
        <Experience
          selectedFacility={selectedFacility}
          handleFacilityClick={handleFacilityClick}
          hoverName={hoverName}
          setHoverName={setHoverName}
          camera={camera}
          isRotating={isRotating}
        />
      </Canvas>
    </div>
  )
}

export default CanvasWrapper
