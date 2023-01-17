import React, { useRef } from 'react'
import LightingControls from '../controls/LightingControls'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
// const lightingControls = LightingControls()

const Lighting = () => {
  const spotlightRef = useRef()
  const { scene } = useThree()

  if (spotlightRef.current) {
    const light = spotlightRef.current

    // light.target = new THREE.Vector3(1, 2, 1); //;
    const d = 5000

    light.shadow.camera.left = -d
    light.shadow.camera.right = d
    light.shadow.camera.top = d
    light.shadow.camera.bottom = -d
    light.shadow.radius = 1.5

    light.shadow.camera.near = 0.1 // default
    light.shadow.camera.far = 1000 // default

    const helper = new THREE.CameraHelper(light.shadow.camera)
    scene.add(helper)
    console.log('light', light)
  }

  const lightingControls = LightingControls()
  return (
    <>
      <ambientLight intensity={lightingControls['Ambient Intensity']} />
      <hemisphereLight
        skyColor={lightingControls['Ambient Sky Colour']}
        groundColor={lightingControls['Ambient Ground Colour']}
        intensity={lightingControls['Hemisphere Intensity']}
      />
      <spotLight
        ref={spotlightRef}
        angle={Math.PI / 2.8}
        intensity={lightingControls['Spotlight Intensity']}
        position={[
          lightingControls['Spotlight Position'].x,
          lightingControls['Spotlight Position'].y,
          lightingControls['Spotlight Position'].z
        ]}
        color='grey'
        castShadow
        shadow-bias={0.0001}
        shadow-mapSize-height={1024 * 4}
        shadow-mapSize-width={1024 * 4}
      />
    </>
  )
}

// shadow-camera-near={0.1}
// shadow-camera-far={1000}

export default Lighting
