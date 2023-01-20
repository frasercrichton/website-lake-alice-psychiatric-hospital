import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Cover from './Cover'
import CanvasWrapper from './scene-3d/CanvasWrapper'
import { Leva } from 'leva'
import angleToRadians from './scene-3d/angleHelper'
import Loader from './components/Loader'
import ScrollWrapper from './ScrollWrapper'
import { InView, useInView } from 'react-intersection-observer'

function App () {
  const [facility, setFacility] = useState('')
  const cameraConfig = {
    position: [0, 600, 400],
    rotation: [-angleToRadians(50), 0, 0],
    aspect: 1,
    fov: 80,
    near: 10,
    far: 10000
  }

  const [camera, setCamera] = useState(cameraConfig)
  const cameras = new Map()
  const [hoverName, setHoverName] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setLoading] = useState(true)

  const [coverActive, setCoverActive] = useState(true)
  const [tab, setTab] = useState('site')

  const handleCanvasClick = () => {
    setFacility('')
    setHoverName('')
  }

  const handleContextUpdate = tab => {
    setFacility('')
    setTab(tab)
  }

  const handleFacilityClick = facilityId => {
    setTab('site')
    setHoverName('')
    const activeFacility = facilityId === facility ? '' : facilityId
    setFacility(activeFacility)
    const activeCamera = cameras.get(activeFacility + 'Camera')
    if (activeCamera) {
      setCamera(activeCamera)
    }
    // default camera
  }

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    initialInView: false,
    onChange: (inView, ref, entry) => {
      console.log('ccc', entry)
    },
  })
  return (
    <ScrollWrapper inView={inView}>
      <div ref={ref} className='inview-block'>
        <h2>
          Element is inside the viewport: <strong>{inView.toString()}</strong>
        </h2>
      </div>
    </ScrollWrapper>
  )
}

export default App
