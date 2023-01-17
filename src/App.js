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

function App () {
  const [facility, setFacility] = useState('')
  const defaultCameraConfig = {
    position: [0, 600, 400],
    rotation: [-angleToRadians(50), 0, 0],
    aspect: 1,
    fov: 80,
    near: 10,
    far: 10000
  }

  const [camera, setCamera] = useState(defaultCameraConfig)
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
    else {
      setCamera(defaultCameraConfig)
    }
    // default camera
  }

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  return (
    <div className='site-container'>
      <Leva oneLineLabels />
      <Loader />
      <Cover
        key='cover'
        coverActive={coverActive}
        handleCoverClick={handleCoverClick}
        setContent={setContent}
      />

      <Header handleClick={setContent} enableClose={content !== ''} />

      <Content key={content} content={content} setContent={setContent} />

      <CanvasWrapper
        key='canvas'
        selectedFacility={facility}
        handleFacilityClick={handleFacilityClick}
        hoverName={hoverName}
        setHoverName={setHoverName}
        handleCanvasClick={handleCanvasClick}
        camera={camera}
        cameras={cameras}
      />
      <Menu
        setContent={setContent}
        selectedFacility={facility}
        handleMenuClick={handleFacilityClick}
        hoverName={hoverName}
        tab={tab}
        handleContextUpdate={handleContextUpdate}
      />
    </div>
  )
}

export default App
