import React, { Suspense } from 'react'
import './App.css'
import { Canvas, useThree, Camera } from '@react-three/fiber'
import Plan from './canvas/Plan'
import SideBar from './SideBar'
import Map from './Map'
import Header from './Header'
function App () {
  return (
    <div className='App'>
      <div className='App-header'>
        <Header />
        <Map />
        <Canvas camera={{ position: [0, 100, 200], rotateY: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 100, 100]} angle={90} castShadow />
            {/* <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
            <Plan />
          </Suspense>
        </Canvas>
        <SideBar />
      </div>
    </div>
  )
}

export default App
