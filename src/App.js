import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import Content from './main-content/Content.jsx'
import Cover from './Cover.jsx'
import CanvasWrapper from './3d-world/Canvas.jsx'
import { Leva } from 'leva'
import angleToRadians from './3d-world/angleHelper'
import Loader from './components/Loader.jsx'
import data from './config/chapters'
import GeographicMap from './map/GeographicMap.jsx'
import Stats from 'stats.js'
import Chapters from './main-content/Chapters.jsx'
const lakeAliceCoordinates = { latitude: -40.1254336, longitude: 175.3369864 }

const defaultCameraConfig = {
  position: [0, 600, 400],
  rotation: [-angleToRadians(50), 0, 0],
  aspect: 1,
  fov: 80,
  near: 10,
  far: 10000
}

const hash = window.location.hash

if (hash === '#debug') {
  const stats = new Stats()
  stats.showPanel(0)
  document.body.appendChild(stats.dom)
}

function App () {
  const [facility, setFacility] = useState('')
  // const [hash, setHash] = useState(() => window.location.hash)
  const [camera, setCamera] = useState(defaultCameraConfig)
  // TODO -  useState('') >  useState(null)
  const [sectionInView, setSectionInView] = useState('')
  const [hoverName, setHoverName] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [coverActive, setCoverActive] = useState(true)
  const [tab, setTab] = useState('site')
  const [scrollProgress, setScrollProgress] = useState(0.3)

  const mapZoomDimensions = {
    maxBounds: sectionInView.map ? sectionInView.map.bounds : null,
  }

  const centre = sectionInView.map ? sectionInView.map.centre : null
  const visibleMapLayers =
    sectionInView.map && sectionInView.map.visibleMapLayers
      ? sectionInView.map.visibleMapLayers
      : null

  useEffect(() => {
    const sectionTotalCount = data['/site'].slides.length
    console.log('sectionTotalCount', sectionTotalCount)
    console.log('sectionInView.index', sectionInView.index)
    const sectionCurrentIndex = sectionInView.index
    setScrollProgress(sectionCurrentIndex / sectionTotalCount)
    setCamera(sectionInView.camera)
  }, [sectionInView])

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

    if (!camera) {
      setCamera(defaultCameraConfig)
    }
  }

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!coverActive)
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
      <Header
        scrollProgress={scrollProgress}
        handleClick={setContent}
        enableClose={content !== ''}
      />

      {isContentActive && (
        <Content key={content} content={content} setContent={setContent} />
      )}

      {sectionInView.view === '3d' && (
        <CanvasWrapper
          key='canvas'
          selectedFacility={facility}
          handleFacilityClick={handleFacilityClick}
          hoverName={hoverName}
          setHoverName={setHoverName}
          handleCanvasClick={handleCanvasClick}
          camera={camera}
        />
      )}

      {sectionInView.view === 'map' && (
        <GeographicMap
          visibleMapLayers={visibleMapLayers}
          {...mapZoomDimensions}
        />
      )}

      <Menu
        setContent={setContent}
        selectedFacility={facility}
        handleMenuClick={handleFacilityClick}
        hoverName={hoverName}
        tab={tab}
        handleContextUpdate={handleContextUpdate}
      />

      <Chapters chapters={data['/site']} setSectionInView={setSectionInView} />
    </div>
  )
}

export default App
