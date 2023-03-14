import React, { Suspense } from 'react'
import './Canvas.css'
import ThreeLoader from './ThreeLoader.jsx'
import HospitalLayout from './HospitalLayout.jsx'
import Camera from './Camera.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import Environment from './Environment.jsx'
import Floor from './Floor.jsx'

const Experience = ({
  pageCamera,
  cameraMoveDuration,
  isRotating,
  labels,
  pageScrollProgress
}) => {
  const { World } = LookAndFeelControls()

  return (
    <>
      <Camera
        pageCamera={pageCamera}
        cameraMoveDuration={cameraMoveDuration}
        pageScrollProgress={pageScrollProgress}
      />
      <color args={[World]} attach='background' />
      <Environment />
      <Floor />
      <Suspense fallback={<ThreeLoader />}>
        <HospitalLayout labels={labels} isRotating={isRotating} />
      </Suspense>
    </>
  )
}

export default Experience
