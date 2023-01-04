import './Label.css'
// import { CSSTransition } from 'react-transition-group'
import { Html } from '@react-three/drei'
const Label = ({
  text,
  isClicked,
  hoverName,
  id,
  position
}) => {
  const facilityName = id.replace('Annotation', '')
  const isHover = facilityName === hoverName
  const tagClass = isClicked || isHover ? 'tag active' : 'tag'

  return (
    // <CSSTransition
    //   in={isClicked || isHover}
    //   timeout={500}
    //   classNames='label'
    //   unmountOnExit
    // >
    <Html
      // transform
      // sprite
      // rotation={[Math.PI / 2, 0, 0]}
      zIndexRange={[150, 0]}
      // distanceFactor={2}
      position={position}
      scale={7}
    >
      <div>
        <div className='line'></div>
        <div
          className={tagClass}
        >
          {text}
        </div>
      </div>
    </Html>
    // </CSSTransition>
  )
}

export default Label
