import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Cover from './Cover'
import CanvasWrapper from './threejs-components/CanvasWrapper'

function App () {
  const [facility, setFacility] = useState('')
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
  }

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  return (
    <div className='site-container'>

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
