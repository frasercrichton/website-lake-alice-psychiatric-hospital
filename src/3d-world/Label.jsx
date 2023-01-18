import './Label.css'
// import { CSSTransition } from 'react-transition-group'
import { Html } from '@react-three/drei'
const Label = ({
  text,
  isClicked,
  hoverName,
  id,
}) => {
  const isHover = id === hoverName
  const tagClass = isClicked || isHover ? 'tag active' : 'tag'
  return (
    // <CSSTransition
    //   in={isClicked || isHover}
    //   timeout={500}
    //   classNames='label'
    //   unmountOnExit
    // >
    <Html
      zIndexRange={[150, 0]}
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
