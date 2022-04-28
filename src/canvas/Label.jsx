import React, { useRef } from 'react'
import './Label.css'
const Label = ({ text, hoverAction, hoverName, id }) => {
  const tag = useRef()

  const facilityName = id.replace('_Annotation', '')
  const isHover = facilityName === hoverName
  const tagClass = isHover ? 'tag hover' : 'tag'

  return (
    <div className='label'>
      <div className='line'></div>
      <div
        ref={tag}
        className={tagClass}
        // onClick={e => setClicked(e)}
        onMouseOver={e => hoverAction(facilityName, e)}
        onMouseOut={e => hoverAction('', e)}
      >
        {text}
      </div>
    </div>
  )
}

export default Label
