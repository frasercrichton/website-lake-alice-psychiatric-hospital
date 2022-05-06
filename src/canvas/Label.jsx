import React from 'react'
import './Label.css'
const Label = ({
  text,
  setClicked,
  hoverAction,
  hoverName,
  id
}) => {
  const facilityName = id.replace('_Annotation', '')
  const isHover = facilityName === hoverName
  const tagClass = isHover ? 'tag hover' : 'tag'

  return (
    <div className='label'>
      <div className='line'></div>
      <div
        className={tagClass}
        onClick={e => setClicked(facilityName)}
        onMouseOver={e => hoverAction(facilityName, e)}
        onMouseOut={e => hoverAction('', e)}
      >
        {text}
      </div>
    </div>
  )
}

export default Label
