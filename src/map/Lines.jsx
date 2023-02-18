import React, { useEffect, useState, useMemo } from 'react'
import Line from './components/Line.jsx'
import Circle from './components/Circle.jsx'
import { LatLng } from 'leaflet'

const Lines = ({ points, target, stepProgress }) => {
  const [activeLines, setActiveLines] = useState([])

  const minorPointStyle = {
    fillColor: '#ffffff',
    radius: '5',
    stroke: false
  }

  const pointSeries = points.map((point, index) => {
    if (index === 0) {
      return null
    }

    const startCoordinates = new LatLng(point.latitude, point.longitude)

    return (
      <>
        <Line
          key={`line-${index}`}
          start={startCoordinates}
          end={
            new LatLng(points[index - 1].latitude, points[index - 1].longitude)
          }
        />
        <Circle
          markerCoordinates={startCoordinates}
          label={point.label}
          {...minorPointStyle}
        />
      </>
    )
  })

  const xPoints = useMemo(() => pointSeries, [pointSeries])

  useEffect(() => {
    const pointIndex = Math.ceil(points.length * stepProgress)
    const index = pointIndex < points.length ? pointIndex : points.length
    const item = xPoints[index]
    setActiveLines([...activeLines, item])
  }, [stepProgress])

  if (!target) {
    return activeLines
  }

  return points.map((point, index) => {
    const startCoordinates = new LatLng(point.latitude, point.longitude)
    return (
      <Line
        key={`line-${index}`}
        start={startCoordinates}
        end={new LatLng(target.latitude, target.longitude)}
      />
    )
  })
}
export default Lines
