import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html center>
      <div>{progress} % loaded</div>
      <div>{active} active</div>
      <div>{errors} errors</div>
      <div>{item} item</div>
      <div>{loaded} loaded</div>
      <div>{total} total</div>
    </Html>
  )
}

export default Loader
