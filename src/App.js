import React, { useState } from 'react'
import './App.css'
import SideBar from './SideBar'
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
  
  const updatesetSelectedFacility = (facilityId) => {
    const update = facilityId === facility ? '' : facilityId
    setFacility(update)
  }

  return (
    <div className='App'>
      <Header />
      <Cover key='cover' coverActive={coverActive} setCoverActive={setCoverActive} setContent={setContent} />

      {content !== '' && (
        <Content key={content} content={content} setContent={setContent} />
      )}

      {(!coverActive && content === '') && (
        // <CSSTransition
        //   in={!coverActive}
        //   timeout={800}
        //   classNames='cover-wrappper'
        //   unmountOnExit
        // >
        <div className='site-container'>
          <CanvasWrapper 
            key='canvas' 
            selectedFacility={facility} 
            setSelectedFacility={setFacility} 
            hoverName={hoverName} 
            setHoverName={setHoverName} />
          <Menu key='menu' 
            setContent={setContent} 
            selectedFacility={facility} 
            setSelectedFacility={updatesetSelectedFacility} 
            hoverName={hoverName} 
            setHoverName={setHoverName} 
            tab={tab} 
            setTab={setTab}
            />
        </div>
        // </CSSTransition>
      )}
      {/* {facility !== '' && (
        <SideBar 
        selectedFacility={facility}
         setSelectedFacility={setFacility}
          setContent={setContent}/>
      )} */}
    </div>
  )
}

export default App
