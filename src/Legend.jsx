import React, { useState } from 'react'

const Legend = ({ node, material, defaultMaterial, onClick }) => {
  const [hover, setHover] = useState(false)
  return (
    <div>
      <div>11 Bed Villas</div>
      <div>Selwyn Leeks</div>
      <div>ECT</div>
      <div>Maximum Security Unit</div>
      <div>Children's villas</div>
      <div>Police Investigations</div>
    </div>
  )
}

export default Legend
