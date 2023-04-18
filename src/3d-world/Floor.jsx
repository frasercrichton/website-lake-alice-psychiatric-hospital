import React from 'react'

const Floor = () => {
  return (
    <mesh
      position-y={-0.5}
      rotation-x={-Math.PI * 0.5}
      scale={7200}
      receiveShadow
    >
      <planeGeometry />
      <meshStandardMaterial color={'#999999'} />
    </mesh>
  )
}

export default Floor
