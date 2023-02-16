import React, { useRef, useEffect } from 'react'
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
  const { World } = LookAndFeelControls()

  const { Near, HemisphereIntensity, skyColour, groundColour } =
    EnvironmentControls()

  useEffect(() => {
    directionalLight.current.shadow.camera.near = Near

    const shadowCameraHelper = new THREE.CameraHelper(
      directionalLight.current.shadow.camera
    )
    scene.add(shadowCameraHelper)

    const helper = new THREE.DirectionalLightHelper(
      directionalLight.current,
      500
    )
    scene.add(helper)
    helper.update()
  }, [])

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
      {/* <fog attach='fog' color={'#F1EDF2'} far={500} near={10} /> */}
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
