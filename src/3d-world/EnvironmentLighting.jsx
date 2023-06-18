import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { DirectionalLightHelper, SpotLightHelper } from 'three'
import DirectionalLightControls from '../controls/DirectionalLightControls.jsx'
import HemisphereLightControls from '../controls/HemisphereLightControls.jsx'
import SpotLightControls from '../controls/SpotLightControls.jsx'
import { BakeShadows, useHelper } from '@react-three/drei'
import FogControls from '../controls/FogControls.jsx'

const EnvironmentLighting = () => {
  const light = useRef()
  // Look and Feel controls
  const directionalLightControls = DirectionalLightControls()
  const spotLightControls = SpotLightControls()
  const {
    DirectionalLightIntensity,
    DirectionalLightPosition,
    DirectionalLightColour,
    DirectionalLightShadowBias,
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

  // useEffect(() => {
  // const scene = new THREE.Scene()
  // const shadowCameraHelper = new THREE.CameraHelper(
  //   directionalLight.current.shadow.camera
  // )
  // scene.add(shadowCameraHelper)

  // const directionalLightHelper = new THREE.DirectionalLightHelper(
  //   directionalLight.current,
  //   500
  // )
  // scene.add(directionalLightHelper)
  // directionalLightHelper.update()

  // const directionalLightHelper = new THREE.SpotLightHelper(
  //   directionalLight.current
  // )

  // useHelper(light, SpotLightHelper, 'red')
  useHelper(light, DirectionalLightHelper, 'red')

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
{/*  */}

      <directionalLight
        ref={light}
        intensity={DirectionalLightIntensity}
        color={DirectionalLightColour}
        castShadow
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
        position={[
          directionalLightControls.positionX,
          directionalLightControls.positionY,
          directionalLightControls.positionZ
        ]}
        //         light.position.set(0, 10, 5)
        // light.target.position.set(-5, 0, 0)
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
        // shadow-camera-top={spotLightControls.shadowCameraExtent} // make this small to make sharper shadows
        // shadow-camera-right={spotLightControls.shadowCameraExtent}
        // shadow-camera-bottom={-spotLightControls.shadowCameraExtent}
        // shadow-camera-left={-spotLightControls.shadowCameraExtent}
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
