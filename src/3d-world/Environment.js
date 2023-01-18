import React, { useRef } from 'react'
import LightingControls from '../controls/EnvironmentControls'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
// const lightingControls = LightingControls()

const Lighting = () => {
  const spotlightRef = useRef()
  const { scene } = useThree()

  if (spotlightRef.current) {
    const light = spotlightRef.current
    // light.target = new THREE.Vector3(1, 2, 1); //;
    const d = 3000

    light.shadow.camera.left = -d
    light.shadow.camera.right = d
    light.shadow.camera.top = d
    light.shadow.camera.bottom = -d

    const helper = new THREE.CameraHelper(light.shadow.camera)
    scene.add(helper)
  }

  const lightingControls = LightingControls()
  return (
    <>
      <ambientLight intensity={lightingControls['Ambient Intensity']} />
      {/* <ambientLight intensity={lightingControls['Ambient Intensity']} />
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
      /> */}
      <fog attach='fog' color={'red'} far={5000} near={10} />

      <directionalLight
        ref={spotlightRef}
        castShadow
        intensity={lightingControls['Spotlight Intensity']}
        angle={Math.PI / 2.8}
        position={[
          lightingControls['Spotlight Position'].x,
          lightingControls['Spotlight Position'].y,
          lightingControls['Spotlight Position'].z
        ]}
        color='#ffffff'
        // shadow-normalBias={0.05}
        shadow-bias={0.0005}
        shadow-radius={5}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-near={10}
        shadow-camera-far={5000}
      />
    </>
  )
}

// shadow-normalBias={0.05} 0.05 and 0.02

// shadow-camera-near={0.1}
// shadow-camera-far={1000}

export default Lighting
