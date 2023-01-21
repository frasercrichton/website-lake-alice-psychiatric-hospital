import React, { useState, useEffect } from 'react'
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
import data from './config/chapters-data'
import Card from './Cards'
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
  const [cameraName, setCameraName] = useState('')

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
  console.log('cameraName xxx', cameraName)

  return data['/site'].slides.map((item, index) => {
    return <Card setCameraName={setCameraName} item={item} index />
  })
}

export default App
