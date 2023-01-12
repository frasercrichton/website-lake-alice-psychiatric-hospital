import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import LightingControls from '../controls/LightingControls'

// const lightingControls = LightingControls()

const Lighting = ({}) => {
  const lightingControls = LightingControls()
  const shadowPosition = [0, 100, 200]
  console.log(lightingControls['Ambient Intensity'])
  return (
    <>
      <ambientLight intensity={lightingControls['Ambient Intensity']} />
      <hemisphereLight
        skyColor={lightingControls['Ambient Sky Colour']}
        groundColor={lightingControls['Ambient Ground Colour']}
        intensity={lightingControls['Hemisphere Intensity']}
      />
      <spotLight
        intensity={lightingControls['Spotlight Intensity']}
        position={shadowPosition}
        color={'grey'}
        castShadow
        shadow-mapSize-height={1024 * 4}
        shadow-mapSize-width={1024 * 4}
        near={0.4}
      />
    </>
  )
}

export default Lighting
