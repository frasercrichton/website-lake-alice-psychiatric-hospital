import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import { Leva } from 'leva'
import './App.css'
import Header from './Header.jsx'
import Cover from './Cover.jsx'
import Canvas from './3d-world/Canvas.jsx'
import angleToRadians from './3d-world/angleHelper.jsx'
import urls from './config/navigation.js'
import Loader from './components/Loader.jsx'
import chapters from './config/chapters.js'
import GeographicMap from './map/GeographicMap.jsx'
import VideoVimeo from './components/VideoVimeo.jsx'
import Stats from 'stats.js'
import Chapter from './main-content/Chapter.jsx'
import Image from './components/Image.jsx'
import AssetUrlHelper from './components/AssetUrlHelper.js'
import TextBox from './components/TextBox'
import MobileCover from './main-content/MobileView'
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
  // Page and chapter State
  const [chapterInView, setChapterInView] = useState(chapters['/introduction'])
  const [activeChapter, setActiveChapter] = useState('/introduction')
  const [pageInView, setPageInView] = useState('') // TODO -  useState('') >  useState(null)
  const [nextChapter, setNextChapter] = useState(chapters['/malcolm'])

  // Scrollarama state
  const [headerScrollProgress, setHeaderScrollProgress] = useState(0.3)
  const [pageScrollProgress, setPageScrollProgress] = useState(null)

  // 3D Model
  const [facility, setFacility] = useState('')
  const [pageCamera, setPageCamera] = useState(defaultCameraConfig)
  const [cameraMoveDuration, setCameraMoveDuration] = useState(2000)
  const [isRotating, setIsRotating] = useState(true)
  const [isLoading, setLoading] = useState(true)

  const [hoverName, setHoverName] = useState('')
  const [content, setContent] = useState('')
  const [coverActive, setCoverActive] = useState(true)
  const [tab, setTab] = useState('site')

  const isLevaHidden = hash !== '#debug'

  const navigate = useNavigate()

  const updateChapter = chapter => {
    setActiveChapter(chapter)
    navigate(chapter)
  }

  const updateStepProgress = progressCount => {
    setPageScrollProgress(progressCount)
  }

  const imageURL = pageInView.image
    ? assetUrlHelper.resolveUrl(pageInView.image.src, '3d-visualisation')
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
    // -1 to account for the double 'introduction' pages
    const sectionTotalCount = chapterInView.pages.length - 1
    const sectionCurrentIndex = pageInView.index
    // if 0 no progress
    // if 1 > percentage

    setHeaderScrollProgress(sectionCurrentIndex / sectionTotalCount)
    // Only update the camera if it's a new camera
    if (pageInView?.camera?.name !== pageCamera?.name) {
      console.log(pageInView?.camera?.name)
      console.log(pageCamera?.name)

      setPageCamera(pageInView.camera)
    }

    pageInView?.camera?.isRotating ? setIsRotating(true) : setIsRotating(false)

    // hacky way to avoid camera bounce after into
    if (pageInView.camera?.duration !== cameraMoveDuration) {
      setCameraMoveDuration(pageInView.camera?.duration)
    }
  }, [pageInView])

  useEffect(() => {
    setChapterInView(chapters[location.pathname])
    setPageInView(chapters[location.pathname].pages[0])
    setHeaderScrollProgress(0)
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
  
  const handleFacilityClick = facilityId => {
    setTab('site')
    setHoverName('')
    const activeFacility = facilityId === facility ? '' : facilityId
    setFacility(activeFacility)

    if (!pageCamera) {
      setPageCamera(defaultCameraConfig)
    }
  }

  const handleCoverClick = () => {
    navigate('/introduction')

    setLoading(!isLoading)
    setCoverActive(!coverActive)
  }

  const imageContainerStyle = {
    position: 'fixed',
    // width: '100vw',
    // height: '100vh',
    display: 'flex'
    // paddingTop: '25px'
  }

  const textBoxContainerStyle = {
    position: 'fixed',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: '50px',
    opacity: 1
  }

  const textBoxStyle = {
    margin: '50px',
    opacity: 1
    // marginTop: '550px'
  }

  return (
    <div className='site-container'>
      <BrowserView>
        <Leva oneLineLabels collapsed hidden={isLevaHidden} />
        <Cover
          key='cover'
          coverActive={coverActive}
          handleCoverClick={handleCoverClick}
          setContent={setContent}
        />
        <Header
          scrollProgress={headerScrollProgress}
          handleClick={setContent}
          enableClose={content !== ''}
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
        />

        {pageInView.text && pageInView.text?.style === 'static' && (
          <TextBox
            text={pageInView.text}
            textBoxContainerStyle={textBoxContainerStyle}
            textBoxStyle={textBoxStyle}
            pageScrollProgress={pageScrollProgress}
            isAnimated
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
            pageCamera={pageCamera}
            cameraMoveDuration={cameraMoveDuration}
            isRotating={isRotating}
            pageScrollProgress={pageScrollProgress}
          />
        )}

        {pageInView.view === 'map' && (
          <GeographicMap
            visibleMapLayers={visibleMapLayers}
            {...mapZoomDimensions}
            pageScrollProgress={pageScrollProgress}
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
            source={pageInView.image.source}
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
          <Route
            key={'route-default'}
            path='/'
            element={
              <Chapter
                chapterInView={chapterInView}
                nextChapter='/introduction'
                setNextChapter={updateChapter}
                pageInView={pageInView}
                setPageInView={setPageInView}
                pageScrollProgress={pageScrollProgress}
                updateStepProgress={updateStepProgress}
              />
            }
          />
          {urls.map(nav => {
            return (
              <Route
                key={`route-${nav.url}`}
                exact
                path={nav.url}
                element={
                  <Chapter
                    chapterInView={chapterInView}
                    nextChapter={nav.next}
                    setPageInView={setPageInView}
                    pageInView={pageInView}
                    setNextChapter={updateChapter}
                    pageScrollProgress={pageScrollProgress}
                    updateStepProgress={updateStepProgress}
                  />
                }
              />
            )
          })}

          {/* <Route
            // key={`route-wild-default`}
            // exact
            path='*'
            nextChapter='/malcolm'
            element={
              <Chapter
                chapterInView={chapterInView}
                setPageInView={setPageInView}
                pageInView={pageInView}
                setNextChapter={updateChapter}
              />
            }
          /> */}
        </Routes>
      </BrowserView>
      <MobileCover />
    </div>
  )
}

export default App
