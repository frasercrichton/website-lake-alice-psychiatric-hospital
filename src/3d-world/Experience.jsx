import React, { Suspense } from 'react'
import './Canvas.css'
import ThreeLoader from './ThreeLoader.jsx'
import Model from './Model.jsx'
import Camera from './Camera.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import Environment from './Environment.jsx'
import Floor from './Floor.jsx'

const Experience = ({
  pageCamera,
  cameraMoveDuration,
  isRotating,
  labels,
  pageScrollProgress,
  disabledMeshes
}) => {
  const { World } = LookAndFeelControls()

  return (
    <>
      <color args={[World]} attach='background' />
      <Environment />
      <Floor />
      <Suspense fallback={<ThreeLoader />}>
        <Model
          isRotating={isRotating}
          disabledMeshes={disabledMeshes}
          labels={labels}
        />
      </Suspense>
      {/* 
      <Suspense fallback={<ThreeLoader />}>
        <Model
          isRotating={isRotating}
          disabledMeshes={disabledMeshes}
          labels={labels}
        />
      </Suspense> */}
      {/* 

      <Suspense fallback={<ThreeLoader />}>
        <Model
          isRotating={isRotating}
          disabledMeshes={disabledMeshes}
          labels={labels}
        />
      </Suspense> */}

      <Camera pageCamera={pageCamera} />
    </>
  )
}

export default Experience
