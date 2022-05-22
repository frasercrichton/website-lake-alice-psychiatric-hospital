import React, { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { CSSTransition } from 'react-transition-group'
import HospitalLayout from './canvas/HospitalLayout'
import SideBar from './SideBar'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Cover from './Cover'

function App () {
  const [selectedFacility, setSelectedFacility] = useState('')
  const [content, setContent] = useState('')
  const [coverActive, setCoverActive] = useState(true)

  return (
    <div className='App'>
      <div className='App-header'>
        <CSSTransition
          in={content !== ''}
          timeout={500}
          classNames='content-wrappper'
          unmountOnExit
        >
          <Content key={content} content={content} setContent={setContent} />
        </CSSTransition>
 
          <Cover key='cover' coverActive={coverActive} setCoverActive={setCoverActive} />
        
        <Header />
        <Menu setContent={setContent} selectedFacility={selectedFacility} setSelectedFacility={setSelectedFacility} />
        <Canvas camera={{ position: [0, 100, 200], rotateY: 45 }}>
          <Suspense fallback={null}>
            <pointLight position={[10, 250, 150]} angle={70} castShadow />
            {/* <ambientLight intensity={0.3} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <pointLight position={[10, 100, 100]} angle={70} castShadow /> */}
            {/* <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
            <HospitalLayout selectedFacility={selectedFacility} setSelectedFacility={setSelectedFacility} />
          </Suspense>
        </Canvas>
        {selectedFacility !== '' && (
          <SideBar selectedFacility={selectedFacility} setSelectedFacility={setSelectedFacility} />
        )} 
      </div>
    </div>
  )
}

export default App
