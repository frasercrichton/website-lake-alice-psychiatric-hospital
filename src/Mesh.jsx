import React, { useState } from 'react'
import { Html } from '@react-three/drei'

const Mesh = ({ node, material, defaultMaterial, onClick }) => {
  const [hover, setHover] = useState(false)
  return (
    <mesh
      onClick={e => onClick(e)}
      onPointerOver={e => setHover(!hover)}
      onPointerOut={e => setHover(!hover)}
      geometry={node.geometry}
      material={hover ? material : defaultMaterial}
    >
      <Html distanceFactor={500} rotation={[Math.PI / 2, 0, 0]} position={[100, 350, 50]}>
        <div className='content'>
          hello <br />
          world
          {node.name}
        </div>
      </Html>
    </mesh>
  )
}

export default Mesh
