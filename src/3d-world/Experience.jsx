import React, { Suspense } from 'react'
import './Canvas.css'
import ThreeLoader from './ThreeLoader'
import HospitalLayout from './HospitalLayout.jsx'
import Camera from './Camera.jsx'
import LookAndFeelControls from '../controls/LookAndFeel.jsx'
import Environment from './Environment.jsx'
import Floor from './Floor.jsx'
import { BakeShadows } from '@react-three/drei'

const Experience = ({
  selectedFacility,
  handleFacilityClick,
  hoverName,
  setHoverName,
  camera,
  isRotating
}) => {
  const { World } = LookAndFeelControls()

  return (
    <>
      <Suspense fallback={<ThreeLoader />}>
        <BakeShadows />
        <Camera camera={camera} />
        <color args={[World]} attach='background' />
        <Environment />
        <Floor />
        <HospitalLayout
          selectedFacility={selectedFacility}
          handleFacilityClick={handleFacilityClick}
          hoverName={hoverName}
          setHoverName={setHoverName}
          isRotating={isRotating}
        />
      </Suspense>
    </>
  )
}

export default Experience
