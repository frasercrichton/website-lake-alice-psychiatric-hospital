import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import './Canvas.css'
import { Canvas } from '@react-three/fiber'
import { Globals } from '@react-spring/shared'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import Experience from './Experience.jsx'
import CanvasFallbackPage from './error/CanvasFallbackPage.jsx'
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

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  return (
    <div className='canvas-wrapper'>
      <ErrorBoundary fallback={<CanvasFallbackPage pageCamera={pageCamera} />}>
        <Canvas
          colormanagement='true'
          dpr={[1, 2]} //the default
          gl={{
            antialias: true, // tweak for performance
            alpha: true,
            useLegacyLights: true,
            outputColorSpace: THREE.SRGBColorSpace,
            // ACESFilmicToneMapping
            // THREE.ReinhardToneMapping
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.5,
            // frameLoop
            // frameLoop: 'demand',
            shadowMap: {
              enabled: true,
              autoUpdate: false,
              needsUpdate: true,
              type: THREE.PCFSoftShadowMap
            }, // static scene where lights don't move so no need to update
            sizes: sizes,
            pixelRatio: Math.min(window.devicePixelRatio, 2),
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: true
          }}
          shadows
        >
          {window.location.hash === '#debug' && (
            <Perf
              style={{ zIndex: 1000 }}
              position='bottom-left'
              deepAnalyze={true}
              colorBlind={true}
            />
          )}
          <Experience
            pageCamera={pageCamera}
            cameraMoveDuration={cameraMoveDuration}
            isRotating={isRotating}
            labels={labels}
            // pageScrollProgress={pageScrollProgress}
            disabledMeshes={disabledMeshes}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}

export default CanvasWrapper
