import React, { useRef, useMemo, useEffect } from 'react'
import './Canvas.css'
import { Canvas } from '@react-three/fiber'
import { Globals } from '@react-spring/shared'
import * as THREE from 'three'
import Experience from './Experience.jsx'
Globals.assign({
  frameLoop: 'always'
})

const CanvasWrapper = ({
  pageCamera,
  cameraMoveDuration,
  isRotating,
  // pageScrollProgress,
  disabledMeshes,
  labels
}) => {
  const aspectRatio = {
    width: 1920,
    height: 1080
  }

  const defaultOutputEncoding = THREE.sRGBEncoding

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
    // pixelRatio: Math.min(window.devicePixelRatio, 2)
  }

  return (
    <div className='canvas-wrapper'>
      <Canvas
        colormanagement='true'
        shadows
        dpr={[1, 2]} //the default
        gl={{
          antialias: true, // tweak for performance
          alpha: true,
          physicallyCorrectLights: true,
          outputEncoding: defaultOutputEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
          shadowMap: { autoUpdate: false, needsUpdate: true }, // static scene where lights don't move so no need to update
          sizes: sizes,
          powerPreference: 'high-performance'
        }}
      >
        <Experience
          pageCamera={pageCamera}
          cameraMoveDuration={cameraMoveDuration}
          isRotating={isRotating}
          labels={labels}
          // pageScrollProgress={pageScrollProgress}
          disabledMeshes={disabledMeshes}
        />
      </Canvas>
    </div>
  )
}

export default CanvasWrapper
