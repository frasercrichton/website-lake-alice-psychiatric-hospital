import React, { useState } from 'react'

const Legend = ({ node, material, defaultMaterial, onClick }) => {
  const [hover, setHover] = useState(false)
  return (
    <div>
      <div>Location:</div>
      <div>Villa x</div>
      <div>context</div>
      <div>image</div>
    </div>
  )
}

export default Legend
