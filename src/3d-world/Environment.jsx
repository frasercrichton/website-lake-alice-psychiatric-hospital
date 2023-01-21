import React, { useRef } from 'react'
import EnvironmentControls from '../controls/EnvironmentControls'
import ShadowCameraControls from '../controls/ShadowCameraControls'
import DirectionalLightControls from '../controls/DirectionalLightControls'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

const Lighting = () => {
  const spotlightRef = useRef()
  const environmentControls = EnvironmentControls()
  const directionalLightControls = DirectionalLightControls()
  const shadowCameraControls = ShadowCameraControls()
  const { scene } = useThree()
  const shadowCameraExtent = shadowCameraControls['Extent']

  if (spotlightRef.current) {
    const light = spotlightRef.current
    light.shadow.camera.near = shadowCameraControls['Near']
    const shadowCameraHelper = new THREE.CameraHelper(light.shadow.camera)
    scene.add(shadowCameraHelper)
    // helper.update()

    const helper = new THREE.DirectionalLightHelper(light, 500)

    scene.add(helper)
    helper.update()
  }

  return (
    <>
      <hemisphereLight
        skyColor={environmentControls['Ambient Sky Colour']}
        groundColor={environmentControls['Ambient Ground Colour']}
        intensity={environmentControls['Hemisphere Intensity']}
      />
      {/* <ambientLight intensity={lightingControls['Ambient Intensity']} /
       */}
      {/* <fog attach='fog' color={'red'} far={5000} near={10} /> */}
      <directionalLight
        ref={spotlightRef}
        castShadow
        intensity={directionalLightControls['Intensity']}
        position={[
          directionalLightControls['Position'].x,
          directionalLightControls['Position'].y,
          directionalLightControls['Position'].z
        ]}
        color='#ffffff'
        shadow-normalBias={3}
        shadow-bias={0.000005}
        shadow-radius={9}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-top={shadowCameraExtent}
        shadow-camera-bottom={-shadowCameraExtent}
        shadow-camera-left={-shadowCameraExtent}
        shadow-camera-right={shadowCameraExtent}
        // shadow-camera-near={shadowCameraControls['Near']}
        shadow-camera-far={shadowCameraControls['Far']}
      />
    </>
  )
}

export default Lighting
