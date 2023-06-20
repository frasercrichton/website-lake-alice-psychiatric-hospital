import React from 'react'

const Floor = () => {
  return (
    <mesh
      rotation-x={-Math.PI * 0.5}
      scale={7200}
      receiveShadow
      castShadow
    >
      <planeGeometry />
      <meshStandardMaterial color={'#dcdcdc'} />
    </mesh>
  )
}

export default Floor
