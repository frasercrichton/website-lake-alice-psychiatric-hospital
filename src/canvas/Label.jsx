import React from 'react'
import './Label.css'
import { CSSTransition } from 'react-transition-group'
const Label = ({
  text,
  isClicked,
  setSelectedFacility,
  hoverAction,
  hoverName,
  id
}) => {
  const facilityName = id.replace('_Annotation', '')
  const isHover = facilityName === hoverName
  const tagClass = isClicked || isHover ? 'tag active' : 'tag'

  return (
    // <CSSTransition
    //   in={isClicked || isHover}
    //   timeout={500}
    //   classNames='label'
    //   unmountOnExit
    // >
      <div className={tagClass}>
        <div className='line'></div>
        <div
          className='tag active'
          onClick={e => setSelectedFacility(facilityName)}
          onMouseOver={e => hoverAction(facilityName, e)}
          onMouseOut={e => hoverAction('', e)}
        >
          {text}
        </div>
      </div>
    // </CSSTransition>
  )
}

export default Label
