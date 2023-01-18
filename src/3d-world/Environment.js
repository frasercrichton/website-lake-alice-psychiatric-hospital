import React, { useRef } from 'react'
import EnvironmentControls from '../controls/EnvironmentControls'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

const Lighting = () => {
  const spotlightRef = useRef()
  const environmentControls = EnvironmentControls()
  const { scene } = useThree()
  const shadowCameraExtent = environmentControls['Shadow Camera Extent']

  if (spotlightRef.current) {
    const light = spotlightRef.current
    const helper = new THREE.CameraHelper(light.shadow.camera)
    scene.add(helper)  
  }

  return (
    <>
      {/* <ambientLight intensity={lightingControls['Ambient Intensity']} />
      <hemisphereLight
        skyColor={lightingControls['Ambient Sky Colour']}
        groundColor={lightingControls['Ambient Ground Colour']}
        intensity={lightingControls['Hemisphere Intensity']}
      />
    */}
      <fog attach='fog' color={'red'} far={5000} near={10} />
      <directionalLight
        ref={spotlightRef}
        castShadow
        intensity={environmentControls['Directional Intensity']}
        angle={Math.PI * 0.3}
        position={[
          environmentControls['Directional Position'].x,
          environmentControls['Directional Position'].y,
          environmentControls['Directional Position'].z
        ]}
        color='#ffffff'
        // shadow-normalBias={0.05}
        shadow-bias={0.0005}
        shadow-radius={5}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-top={shadowCameraExtent}
        shadow-camera-bottom={-shadowCameraExtent}
        shadow-camera-left={-shadowCameraExtent}
        shadow-camera-right={shadowCameraExtent}
        shadow-camera-near={environmentControls['Shadow Camera Near']}
        shadow-camera-far={environmentControls['Shadow Camera Far']}
      />
    </>
  )
}

// shadow-normalBias={0.05} 0.05 and 0.02

export default Lighting
