import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import { CSSTransition } from 'react-transition-group'
import Menu from './Menu'
import Content from './Content'
import Cover from './Cover'
import CanvasWrapper from './threejs-components/CanvasWrapper'

function App () {
  const [facility, setFacility] = useState('')
  const [hoverName, setHoverName] = useState('')
  const [content, setContent] = useState('')
  const [coverActive, setCoverActive] = useState(true)
  const [tab, setTab] = useState('site')

  const isClicked = facility !== ''

  const handleCanvasClick = () => {
    setFacility('')
    setHoverName('')
  }

  const handleContextUpdate = tab => {
    setFacility('')
    setTab(tab)
  }

  const handleFacilityClick = (facilityId) => {
    setHoverName('')
    const update = facilityId === facility ? '' : facilityId
    setFacility(update)
  }
  return (
    <div className='site-container'>

      <Cover key='cover' coverActive={coverActive} setCoverActive={setCoverActive} setContent={setContent} />

      <Header handleClick={setContent} enableClose={content !== ''} />

      {content !== '' && (
        <Content key={content} content={content} setContent={setContent} />
      )}

      {(!coverActive && content === '') && (
        <CSSTransition
          in={!coverActive}
          timeout={800}
          classNames='cover-wrappper'
          unmountOnExit
        >
          <>
           <CanvasWrapper
            key='canvas'
            selectedFacility={facility} 
            handleFacilityClick={handleFacilityClick} 
            hoverName={hoverName} 
            setHoverName={setHoverName} 
            handleCanvasClick={handleCanvasClick}
            />
          <Menu key='menu' 
            setContent={setContent}
            selectedFacility={facility}
            handleMenuClick={handleFacilityClick}
            hoverName={hoverName}
            tab={tab}
            handleContextUpdate={handleContextUpdate}
            />
            </>
        </CSSTransition>
      )}
    </div>
  )
}

export default App
