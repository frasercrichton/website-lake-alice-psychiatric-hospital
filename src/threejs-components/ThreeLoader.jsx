import { Html, useProgress } from '@react-three/drei'
import Loader from '../components/Loader'

const ThreeLoader = () => {
  const { loaded } = useProgress()
  return (
    <Html center>
      <Loader isLoading={loaded} />
    </Html>
  )
}

export default ThreeLoader
