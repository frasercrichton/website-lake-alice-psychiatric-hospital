import logo from './logo.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Plan from './Plan'
function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Canvas>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 100, 100]} angle={90} castShadow />
          {/* <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
          <Plan />
        </Canvas>
      </div>
    </div>
  )
}

export default App
