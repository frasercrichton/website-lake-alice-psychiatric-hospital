import React, { useState, useEffect, useMemo } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import { Leva } from 'leva'
import './App.css'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import Content from './main-content/Content.jsx'
import Cover from './Cover.jsx'
import Canvas from './3d-world/Canvas.jsx'
import angleToRadians from './3d-world/angleHelper'
import Loader from './components/Loader.jsx'
import data from './config/chapters.js'
import urls from './config/navigation.jsx'
import GeographicMap from './map/GeographicMap.jsx'
import Stats from 'stats.js'
import Chapter from './main-content/Chapter.jsx'

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
  const [chapterInView, setChapterInView] = useState(data['/context'])
  // TODO -  useState('') >  useState(null)
  const [pageInView, setPageInView] = useState('')
  const [hoverName, setHoverName] = useState('')
  const [content, setContent] = useState('')
  const [isRotating, setIsRotating] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [coverActive, setCoverActive] = useState(true)
  const [tab, setTab] = useState('site')
  const [scrollProgress, setScrollProgress] = useState(0.3)

  const mapZoomDimensions = {
    maxBounds: pageInView.map ? pageInView.map.bounds : null
  }

  const visibleMapLayers =
    pageInView.map && pageInView.map.visibleMapLayers
      ? pageInView.map.visibleMapLayers
      : null

  const location = useLocation()

  useEffect(() => {
    const sectionTotalCount = chapterInView.pages.length
    const sectionCurrentIndex = pageInView.index
    // if 0 no progress
    // if 1 > percentage

    // console.log('sectionTotalCount', sectionTotalCount)
    // console.log('sectionCurrentIndex', sectionCurrentIndex)

    // console.log(
    //   'sectionCurrentIndex / sectionTotalCount',
    //   sectionCurrentIndex / sectionTotalCount
    // )
    // console.log(
    //   'sectionCurrentIndex + 1/ sectionTotalCount',
    //   sectionCurrentIndex + (1 / sectionTotalCount) * 100
    // )

    setScrollProgress(sectionCurrentIndex / sectionTotalCount)
    setCamera(pageInView.camera)
    pageInView?.camera?.isRotating ? setIsRotating(true) : setIsRotating(false)
  }, [pageInView])
  console.log('location', location)
  useEffect(() => {
    if (location.pathname === '/') {
      // setChapterInView(data['/'])
      // setPageInView(data[location.pathname].pages[0])
        
    }
    setChapterInView(data[location.pathname])
    setPageInView(data[location.pathname].pages[0])
    setScrollProgress(0)
  }, [location])

  const handleCanvasClick = () => {
    setFacility('')
    setHoverName('')
  }

  const handleContextUpdate = tab => {
    setFacility('')
    setTab(tab)
  }

  const isContentActive = tab !== 'site' && content !== ''
  // console.log('pageInView.file.content', pageInView?.content?.file)

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

  const isLevaHidden = hash !== '#debug'

  return (
    <div className='site-container'>
      <Leva oneLineLabels collapsed hidden={isLevaHidden} />

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
      {pageInView.view === 'markdown' && (
        <Content
          key={content}
          content={pageInView.content.file}
          setContent={setContent}
        />
      )}
      {/* 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          // backgroundColor: '#0000ff',
          zIndex: '400',
          height: '100vh',
          opacity: '0.7',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            height: '50vh',
            opacity: '0.5',
            align: 'center',
            width: '50%',
            zIndex: '400',
            textAlign: 'center'
          }}
        >
          Lake Alice Psychiatric Hospital was an isolated, self-contained
          psychiatric facility that opened in 1950 on Te Ika-a-Māui the North
          Island of Aotearoa New Zealand 6km outside of Marton. The hospital was
          organised around a system of villas. The small eleven-bed villas were
          seen as advanced at the time providing intensive dedicated group
          therapy for patients. Some of these patients included returned
          servicemen suffering PTSD. Some of these servicemen died and were
          buried at Lake Alice in unmarked graves. The villas also included a
          Maximum Security Unit for the criminally insane. In the modern
          context, this sounds like an unlikely place to site a unit for the
          care of children and adolescents. However, in 1972 Te Wāhanga Tamaiti,
          Taitamariki o Lake the Lake Alice Child and Adolescent Unit (LACAU)
          opened. This unit was notorious in its day. It served as a hub for a
          failed system of child State care. Rather than treating tamariki for
          genuine psychiatric conditions, it was used principally as a
          punishment for children held in a national network of state care
          facilities. This network expanded during the 1950s as criminal justice
          and social service legislation prejudicially entrapped indigenous
          Māori whānau after an urban drift following the Second World War. This
          legislation also ensnared many Pasifika and Pākehā in the care system.
        </div>
      </div>
       */}
      {pageInView.view === '3d' && (
        <Canvas
          key='canvas'
          selectedFacility={facility}
          handleFacilityClick={handleFacilityClick}
          hoverName={hoverName}
          setHoverName={setHoverName}
          handleCanvasClick={handleCanvasClick}
          camera={camera}
          isRotating={isRotating}
        />
      )}

      {pageInView.view === 'map' && (
        <GeographicMap
          visibleMapLayers={visibleMapLayers}
          {...mapZoomDimensions}
        />
      )}

      {/* <Menu
        setContent={setContent}
        selectedFacility={facility}
        handleMenuClick={handleFacilityClick}
        hoverName={hoverName}
        tab={tab}
        handleContextUpdate={handleContextUpdate}
      /> */}
      <Routes>
        {urls.map(nav => {
          const nextChapter = ''
          return (
            <Route
              key={`route-${nav.url}`}
              exact
              path={nav.url}
              element={
                <Chapter
                  chapter={chapterInView}
                  setPageInView={setPageInView}
                  pageInView={pageInView}
                />
              }
            />
          )
        })}
        <Route
          key={`route-default`}
          exact
          path={'/'}
          element={
            <Chapter
              chapter={chapterInView}
              setPageInView={setPageInView}
              pageInView={pageInView}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
