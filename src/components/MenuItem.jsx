import React from 'react'
import './MenuItem.css'
import './Button'
const MenuItem = ({
  isClicked,
  clickAction,
  isHovered,
  id,
  label,
  hoverAction,
  accordionContent
}) => {
  const clickedClassName = isClicked ? 'clicked' : ''
  const hoverClassName = isHovered ? 'hover' : ''
  const isAccordion = accordionContent !== undefined
  const isAccordionOpen = accordionContent !== undefined && clickedClassName

  const activeClass = `menu-item ${clickedClassName} ${hoverClassName}`

  return (
    <div className='container'>
      <div
        key={id}
        className={activeClass}
        onClick={e => clickAction(id)}
        onMouseOver={e => hoverAction(id)}
        onMouseOut={e => hoverAction('')}
      >
        {label}
        {isAccordion && <span className='icon'> </span>}
      </div>
      {isAccordionOpen && <div className='text-panel'>{accordionContent}</div>}
    </div>
  )
}

export default MenuItem
