import React, { Suspense } from 'react'
import './App.css'
import { Canvas, useThree, Camera } from '@react-three/fiber'
import Plan from './canvas/Plan'
import SideBar from './SideBar'
function App () {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='map'>
        <img width='150px' src='https://d10yslqdemxz8r.cloudfront.net/3d-visualisation/fc-20220425-00025-Screen%20Shot%202022-04-25%20at%2010.15.47%20PM.jpg' />
        </div>
        <Canvas camera={{ position: [0, 100, 200], rotateY: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 100, 100]} angle={90} castShadow />
            {/* <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
            <Plan />
          </Suspense>
        </Canvas>
      </div>
      <SideBar />
    </div>
  )
}

export default App
