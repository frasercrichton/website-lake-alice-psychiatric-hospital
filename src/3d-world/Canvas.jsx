import React, { useRef, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// import WebGL from 'three/addons/capabilities/WebGL.js'
import './Canvas.css'
import { Canvas } from '@react-three/fiber'
import { Globals } from '@react-spring/shared'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import Sizes from './Sizes.js'
import Experience from './Experience.jsx'
import CanvasFallbackPage from './error/CanvasFallbackPage.jsx'
import WebGL from 'three/addons/capabilities/WebGL.js'
const sizes = new Sizes()

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
  const canvas = useRef()

  const handleContextCreationError = event => {
    console.log('ContextCreationError', event)

    if (
      event.statusMessage
        .toLowerCase()
        .includes(
          'allowwebgl2:false restricts context creation on this system.'
        )
    ) {
      console.log('allowwebgl2:false restricts context creation on this system')
    }
    // event.preventDefault()
  }

  useEffect(() => {
    // if context is lost this: const gl = canvas.current.getContext('webgl')  will no longer work
    canvas.current.addEventListener(
      'webglcontextcreationerror',
      handleContextCreationError
    )
  }, [canvas])

  if (!WebGL.isWebGLAvailable()) {
    const warning = WebGL.getWebGLErrorMessage()
    console.error('WebGL NOT Available ', warning)
  }

  return (
    <div className='canvas-wrapper'>
      <ErrorBoundary
        fallback={
          <CanvasFallbackPage
            pageCamera={pageCamera}
            disabledMeshes={disabledMeshes}
            labels={labels}
          />
        }
      >
        <Canvas
          ref={canvas}
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
            pixelRatio: sizes.pixelRatio,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: true
          }}
          shadows
        >
          {window.location.hash === '#debug' && (
            <Perf
              style={{ zIndex: 1000 }}
              position='bottom-left'
              deepAnalyz
              colorBlind
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
