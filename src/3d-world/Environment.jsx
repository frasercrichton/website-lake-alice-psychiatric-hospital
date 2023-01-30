import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import EnvironmentControls from '../controls/EnvironmentControls.jsx'
import ShadowCameraControls from '../controls/ShadowCameraControls.jsx'
import DirectionalLightControls from '../controls/DirectionalLightControls.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import { Sky, BakeShadows } from '@react-three/drei'

const Lighting = () => {
  const directionalLight = useRef()
  const { Intensity, Position } = DirectionalLightControls()
  const shadowCameraControls = ShadowCameraControls()
  const { scene } = useThree()
  const shadowCameraExtent = shadowCameraControls['Extent']

  const { x, setX } = useState()
  const { World } = LookAndFeelControls()

  const { Near, HemisphereIntensity, skyColour, groundColour } =
    EnvironmentControls()

  // add useeffect for useref
  if (directionalLight.current) {
    const light = directionalLight.current
    light.shadow.camera.near = Near
    const shadowCameraHelper = new THREE.CameraHelper(light.shadow.camera)
    scene.add(shadowCameraHelper)
    // helper.update()

    const helper = new THREE.DirectionalLightHelper(light, 500)

    scene.add(helper)
    helper.update()
  }

  return (
    <>
      <BakeShadows />

      <hemisphereLight
        skyColor={skyColour}
        groundColor={groundColour}
        intensity={HemisphereIntensity}
      />
      {/* <Sky /> match the sun position to the directional light */}
      <Sky color={new THREE.Color(World)} />

      {/* <ambientLight intensity={lightingControls['Ambient Intensity']} /
       */}
      {/* <fog attach='fog' color={'red'} far={5000} near={10} /> */}
      <directionalLight
        ref={directionalLight}
        castShadow
        intensity={Intensity}
        position={[Position.x, Position.y, Position.z]}
        color='#ffffff'
        shadow-normalBias={3}
        shadow-bias={0.000005}
        shadow-radius={9}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={shadowCameraExtent} // make this small to make sharper shadows
        shadow-camera-right={shadowCameraExtent}
        shadow-camera-bottom={-shadowCameraExtent}
        shadow-camera-left={-shadowCameraExtent}
        // shadow-camera-near={shadowCameraControls['Near']}
        shadow-camera-far={shadowCameraControls['Far']}
      />
    </>
  )
}

export default Lighting
