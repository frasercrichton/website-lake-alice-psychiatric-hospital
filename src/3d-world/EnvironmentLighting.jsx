import React, { useRef } from 'react'
import { DirectionalLightHelper } from 'three' // SpotLightHelper
import DirectionalLightControls from '../controls/DirectionalLightControls.jsx'
import HemisphereLightControls from '../controls/HemisphereLightControls.jsx'
// import SpotLightControls from '../controls/SpotLightControls.jsx'
import { BakeShadows, useHelper } from '@react-three/drei'
import FogControls from '../controls/FogControls.jsx'

const EnvironmentLighting = () => {
  const light = useRef()
  const directionalLightControls = DirectionalLightControls()
  const {
    DirectionalLightIntensity,
    DirectionalLightColour,
    DirectionalLightShadowNormalBias,
    DirectionalLightShadowRadius,
    DirectionalLightShadowCameraExtent
  } = DirectionalLightControls()
  const { FogColour, FogNear, FogFar } = FogControls()

  const {
    HemisphereLightIntensity,
    HemisphereLightGroundColour,
    HemisphereLightSkyColour,
    HemisphereLightPosition
  } = HemisphereLightControls()

  // const spotLightControls = SpotLightControls()
  // useHelper(light, SpotLightHelper, 'red')
  // useHelper(light, // useHelper(light, DirectionalLightHelper, 'red')

  return (
    <>
      <hemisphereLight
        skyColor={HemisphereLightSkyColour}
        groundColor={HemisphereLightGroundColour}
        intensity={HemisphereLightIntensity}
        position={[
          HemisphereLightPosition.x,
          HemisphereLightPosition.y,
          HemisphereLightPosition.z
        ]}
      />
      <BakeShadows />
      <directionalLight
        ref={light}
        intensity={DirectionalLightIntensity}
        color={DirectionalLightColour}
        position={[
          directionalLightControls.positionX,
          directionalLightControls.positionY,
          directionalLightControls.positionZ
        ]}
        // shadows
        shadow-normalBias={DirectionalLightShadowNormalBias}
        shadow-bias={0.00001}
        shadow-radius={DirectionalLightShadowRadius}
        shadow-mapSize={[1024, 1024]}
        // reload page
        shadow-camera-top={DirectionalLightShadowCameraExtent} // make this small to make sharper shadows
        shadow-camera-right={DirectionalLightShadowCameraExtent}
        shadow-camera-bottom={-DirectionalLightShadowCameraExtent}
        shadow-camera-left={-DirectionalLightShadowCameraExtent}
        shadow-camera-far={directionalLightControls.Far}
        shadow-camera-near={directionalLightControls.Near}
        castShadow
      />

      {/* <spotLight
        ref={light}
        color='#ffffff'
        intensity={spotLightControls.intensity}
        castShadow
        decay={1}
        angle={Math.PI / 2.4}
        distance={spotLightControls.distance}
        shadow-mapSize={[1024 * 4, 1024 * 4]}
        shadow-normalBias={spotLightControls.shadowNormalBias}
        shadow-bias={0.0000001}
        shadow-radius={DirectionalLightShadowRadius}
        shadow-camera-far={directionalLightControls.Far}
        shadow-camera-near={directionalLightControls.Near}
        position={[
          spotLightControls.positionX,
          spotLightControls.positionY,
          spotLightControls.positionZ
        ]}
      /> */}
      <fog attach='fog' color={FogColour} far={FogFar} near={FogNear} />
    </>
  )
}

export default EnvironmentLighting
