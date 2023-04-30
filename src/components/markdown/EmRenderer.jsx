import './EmRenderer.css'

const EmRenderer = ({ node, ...props }) => {
  const firstChild = props.children[0]
  const isChildString = firstChild && typeof firstChild === 'string'

  if (isChildString && firstChild.startsWith('^')) {
    return <sup>{firstChild.substring(1)}</sup>
  }

  if (isChildString && firstChild.startsWith('~')) {
    return <sub>{firstChild.substring(1)}</sub>
  }

  return (
    <div className='caption'>
      <i {...props} />
    </div>
  )
}

export default EmRenderer
