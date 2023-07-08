import { Html, useProgress } from '@react-three/drei'
import Loader from '../components/Loader.jsx'
import './ThreeLoader.css'
const ThreeLoader = () => {
  const { loaded } = useProgress()
  return (
    <Html center>
      <div className='three-loader-container'>
        
        <Loader isLoading={loaded} />
      </div>
    </Html>
  )
}

export default ThreeLoader
