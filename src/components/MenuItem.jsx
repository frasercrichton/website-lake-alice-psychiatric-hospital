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

  const hoverEvents =
    hoverAction != null
      ? {
          onMouseOver: e => hoverAction(id),
          onMouseOut: e => hoverAction('')
        }
      : null

  return (
    <div className='container'>
      <div
        key={id}
        className={activeClass}
        onClick={e => clickAction(id)}
        {...hoverEvents}
      >
        {label}
        {isAccordion && <span className='icon'> </span>}
      </div>
      {isAccordionOpen && <div className='text-panel'>{accordionContent}</div>}
    </div>
  )
}

export default MenuItem
