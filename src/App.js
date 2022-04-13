import logo from './logo.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Site from './Site'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Site position={[-1.2, 0, 0]} />
          <Site position={[1.2, 0, 0]} />
        </Canvas>
      </header>
    </div>
  )
}

export default App
