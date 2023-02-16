import './MenuItem.css'
import './Button.jsx'
const MenuItem = ({
  isClicked,
  handleClick,
  isHovered,
  id,
  label,
  handleHover,
  accordionContent = ''
}) => {
  const clickedClassName = isClicked ? 'clicked' : ''
  const hoverClassName = isHovered ? 'hover' : ''
  const isAccordion = accordionContent !== ''
  const isAccordionOpen = accordionContent !== '' && clickedClassName

  const activeClass = `menu-item ${clickedClassName} ${hoverClassName}`.trim()

  const hoverEvents =
    handleHover != null
      ? {
          onMouseOver: e => handleHover(id),
          onMouseOut: e => handleHover('')
        }
      : null

  return (
    <div className='container'>
      <div
        key={id}
        className={activeClass}
        onClick={e => handleClick(id)}
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
