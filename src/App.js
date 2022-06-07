import React, { useState } from 'react'
import './App.css'
import SideBar from './SideBar'
import Header from './Header'
import { CSSTransition } from 'react-transition-group'
import Menu from './Menu'
import Content from './Content'
import Cover from './Cover'
import CanvasWrapper from './canvas/CanvasWrapper'

function App () {
  const [selectedFacility, setSelectedFacility] = useState('')
  const [content, setContent] = useState('')
  const [coverActive, setCoverActive] = useState(true)

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
          <Menu key='menu' setContent={setContent} selectedFacility={selectedFacility} setSelectedFacility={setSelectedFacility} />
          <CanvasWrapper key='canvas' selectedFacility={selectedFacility} setSelectedFacility={setSelectedFacility} />
        </div>
        // </CSSTransition>
      )}
      {selectedFacility !== '' && (
        <SideBar selectedFacility={selectedFacility} setSelectedFacility={setSelectedFacility} setContent={setContent}/>
      )}
    </div>
  )
}

export default App
