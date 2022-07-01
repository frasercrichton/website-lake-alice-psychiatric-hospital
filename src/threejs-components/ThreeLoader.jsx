import { Html, useProgress } from '@react-three/drei'
import Loader from '../components/Loader'
import './ThreeLoader.css'
const ThreeLoader = () => {
  const { loaded } = useProgress()
  return (
    <Html center>
      <div className='three-loader-container'>
        <h1>loading</h1>
        <Loader isLoading={loaded} />
      </div>
    </Html>
  )
}

export default ThreeLoader
