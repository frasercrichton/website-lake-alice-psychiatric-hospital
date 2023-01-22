import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Content from './main-content/Content'
import Cover from './Cover'
import CanvasWrapper from './3d-world/Canvas'
import { Leva } from 'leva'
import angleToRadians from './3d-world/angleHelper'
import Loader from './components/Loader'
import data from './config/section-content'
import Section from './main-content/Section'

const defaultCameraConfig = {
  position: [0, 600, 400],
  rotation: [-angleToRadians(50), 0, 0],
  aspect: 1,
  fov: 80,
  near: 10,
  far: 10000
}

function App () {
  const [facility, setFacility] = useState('')
  // const [hash, setHash] = useState(() => window.location.hash)
  const hash = window.location.hash

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

  const isContentActive = tab !== 'site' && content !== ''

  const handleFacilityClick = facilityId => {
    setTab('site')
    setHoverName('')
    const activeFacility = facilityId === facility ? '' : facilityId
    setFacility(activeFacility)
    const activeCamera = cameras.get(activeFacility + 'Camera')

    if (activeCamera) {
      setCamera(activeCamera)
    } else {
      setCamera(defaultCameraConfig)
    }
    // default camera
  }

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  const sections = () => {
    return data['/site'].slides.map((item, index) => {
      return <Section setCamera={setCamera} item={item} index />
    })
  }

  return (
    <div className='site-container'>
      {hash === 'debug' && <Leva oneLineLabels />}

      <Loader />
      <Cover
        key='cover'
        coverActive={coverActive}
        handleCoverClick={handleCoverClick}
        setContent={setContent}
      />
      <Header handleClick={setContent} enableClose={content !== ''} />

      {isContentActive && (
        <Content key={content} content={content} setContent={setContent} />
      )}

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
      <div className='scroller'>{sections()}</div>
    </div>
  )
}

export default App
