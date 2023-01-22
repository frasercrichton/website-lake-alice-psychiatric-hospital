import React from 'react'
import LookAndFeelControls from '../controls/LookAndFeel'

const Floor = () => {
  const lookAndFeelControls = LookAndFeelControls()
  return (
    <mesh
      position-y={-1}
      rotation-x={-Math.PI * 0.5}
      scale={10000}
      receiveShadow
    >
      <planeGeometry />
      <meshStandardMaterial color={lookAndFeelControls['Ground']} />
    </mesh>
  )
}

export default Floor
