import React from 'react'
import './Label.css'
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
    <div className='label'>
      <div className='line'></div>
      <div
        className={tagClass}
        onClick={e => setSelectedFacility(facilityName)}
        onMouseOver={e => hoverAction(facilityName, e)}
        onMouseOut={e => hoverAction('', e)}
      >
        {text}
      </div>
    </div>
  )
}

export default Label
