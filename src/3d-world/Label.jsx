import './Label.css'
import { Html } from '@react-three/drei'

const Label = ({ text, position }) => {
  
  return (
    <Html zIndexRange={[150, 0]} scale={1} position={position}>
      <div>
        <div className='line'></div>
        <div className='tag'>{text}</div>
      </div>
    </Html>
  )
}

export default Label
