import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Cover from './Cover'
import CanvasWrapper from './threejs-components/CanvasWrapper'
import { Leva } from 'leva'
import CameraControls from './controls/CameraControls'

function App () {
  const [facility, setFacility] = useState('')
  const cameraControls = CameraControls()
  const cameraConfig = {
    position: [
      cameraControls.Position.x,
      cameraControls.Position.y,
      cameraControls.Position.z
    ],
    rotation: [
      cameraControls.Rotation.x,
      cameraControls.Rotation.y,
      cameraControls.Rotation.z
    ],
    // quaternion: {
    //   [-angleToRadians(50), 0, 0]
    //   0
    // },
    aspect: 1,
    fov: 80,
    near: 10,
    far: 10000
  }
  
  const [camera, setCamera] = useState(cameraConfig)
  const cameras = new Map()
  const [cameraPosition, setCameraPosition] = useState([])
  const [cameraTarget, setCameraTarget] = useState([])
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

  const handleFacilityClick = (facilityId) => {
    setTab('site')
    setHoverName('')
    const update = facilityId === facility ? '' : facilityId
    setFacility(update)
    setCamera(cameras.get(update + 'Camera'))
    setCameraPosition([])
    // setTargetPosition([])
  }

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  return (
    <div className='site-container'>
      <Leva oneLineLabels />

      <Cover key='cover' coverActive={coverActive} handleCoverClick={handleCoverClick} setContent={setContent} />

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
