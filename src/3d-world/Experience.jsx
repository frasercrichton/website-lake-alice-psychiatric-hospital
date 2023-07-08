import React, { Suspense } from 'react'
import './Canvas.css'
import ThreeLoader from './ThreeLoader.jsx'
import Model from './Model.jsx'
import Camera from './Camera.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import EnvironmentLighting from './EnvironmentLighting.jsx'
import Floor from './Floor.jsx'

const Experience = ({
  pageCamera,
  isRotating,
  labels,
  pageScrollProgress,
  disabledMeshes
}) => {
  const { World } = LookAndFeelControls()

  return (
      <Suspense fallback={<ThreeLoader />}>
        <Camera pageCamera={pageCamera} />
        <EnvironmentLighting />
        <color args={[World]} attach='background' />
        <Floor />
        <Model
          isRotating={isRotating}
          disabledMeshes={disabledMeshes}
          labels={labels}
        />
      </Suspense>
  )
}

export default Experience
