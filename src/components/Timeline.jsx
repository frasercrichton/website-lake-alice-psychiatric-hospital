import React from 'react'
import './Timeline.css'

const Timeline = ({ decade: selectedDecade }) => {
  const decades = ['1970', '1980', '1990', '2000', '2010', '2020']

  const decadesItem = decades.map(decade => {
    const className = Number(decade) <= Number(selectedDecade) ? 'active' : null

    return (
      <li className={className}>
        <time>{decade}</time>
      </li>
    )
  })

  return (
    selectedDecade && (
      <div className='timeline-section'>
        <h2>Timeline</h2>
        <ul>{decadesItem}</ul>
      </div>
    )
  )
}

export default Timeline
