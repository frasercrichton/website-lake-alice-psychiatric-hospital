import React, { useState, useEffect, useMemo } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
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
import urls from './config/navigation.js'
import GeographicMap from './map/GeographicMap.jsx'
import VideoVimeo from './components/VideoVimeo.jsx'
import Stats from 'stats.js'
import Chapter from './main-content/Chapter.jsx'
import Image from './components/Image.jsx'
import AssetUrlHelper from './components/AssetUrlHelper.js'
import TextBox from './components/TextBox'
const defaultCameraConfig = {
  position: [0, 600, 400],
  rotation: [-angleToRadians(50), 0, 0],
  aspect: 1,
  fov: 80,
  near: 10,
  far: 10000
}
const assetUrlHelper = new AssetUrlHelper()

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
  const [active, setActive] = useState('/introduction')
  // const [nextChapter, setNextChapter] = useState(data['/context'])
  const navigate = useNavigate()

  const setNextChapter = chapter => {
    setActive(chapter)
    navigate(chapter)
  }

  // setNextChapter(nextChapter)
  const imageURL = pageInView.image
    ? assetUrlHelper.resolveUrl(pageInView.image.src)
    : null

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
    navigate('/introduction')

    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  const isLevaHidden = hash !== '#debug'

  const imageContainerStyle = {
    position: 'fixed',
    width: '100vw',
    display: 'flex',
    paddingTop: '25px'
  }

  const textBoxContainerStyle = {
    position: 'fixed',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }

  const textBoxStyle = {
    margin: '50px',
    marginTop: '550px'
  }

  return (
    <div className='site-container'>
      <Leva oneLineLabels collapsed hidden={isLevaHidden} />
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
        active={active}
        setActive={setActive}
      />
      {pageInView.view === 'markdown' && (
        <Content
          key={content}
          content={pageInView.content.file}
          setContent={setContent}
        />
      )}

      {pageInView.text && pageInView.text?.style === 'static' && (
        <TextBox
          text={pageInView.text}
          textBoxContainerStyle={textBoxContainerStyle}
          textBoxStyle={textBoxStyle}
        />
      )}
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

      {pageInView.video !== undefined && (
        <VideoVimeo
          id={pageInView.video.id}
          caption={pageInView.video.caption}
        />
      )}

      {pageInView.image && pageInView.image?.style === 'static' && (
        <Image
          caption={pageInView.image.caption}
          url={imageURL}
          style={imageContainerStyle}
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
          return (
            <Route
              key={`route-${nav.url}`}
              exact
              path={nav.url}
              element={
                <Chapter
                  chapter={chapterInView}
                  nextChapter={nav.next}
                  setPageInView={setPageInView}
                  setNextChapter={setNextChapter}
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
        <Route
          key={`route-wild-default`}
          path={'*'}
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
