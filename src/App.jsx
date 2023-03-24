import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import { Leva } from 'leva'
import './App.css'
import Header from './Header.jsx'
import MarkdownPage from './main-content/MarkdownPage.jsx'
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
import { animated } from '@react-spring/web'
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
  const [hasPageReset, setHasPageReset] = useState(false)

  // Scrollarama state
  const [pageScrollProgress, setPageScrollProgress] = useState(null)

  // Navigation state
  const [headerScrollProgress, setHeaderScrollProgress] = useState(0.3)

  // 3D Model
  const [facility, setFacility] = useState('')
  const [pageCamera, setPageCamera] = useState(null)
  const [cameraMoveDuration, setCameraMoveDuration] = useState(2000)
  const [isRotating, setIsRotating] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [disabledMeshes, setDisabledMeshes] = useState([])

  const [content, setContent] = useState('')
  const [coverActive, setCoverActive] = useState(true)

  const isLevaHidden = hash !== '#debug'

  const navigate = useNavigate()

  const updateChapter = chapter => {
    setActiveChapter(chapter)
    navigate(chapter)
  }

  const navigateToChapter = name => {
    setActiveChapter(name)
    // setPageInView({...chapterInView.pages[chapters] })
    setChapterInView(chapters[name])
    navigate(name)
    setHasPageReset(true)
  }

  const location = useLocation()

  useEffect(() => {
    setChapterInView(chapters[location.pathname])
    setPageInView(chapters[location.pathname].pages[0])
    setHeaderScrollProgress(0)
  }, [location])

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

  useEffect(() => {
    // -1 to account for the double 'introduction' pages
    const sectionTotalCount = chapterInView.pages.length - 1
    const sectionCurrentIndex = pageInView.index
    // if 0 no progress
    // if 1 > percentage
    setHeaderScrollProgress(sectionCurrentIndex / sectionTotalCount)

    if (pageInView.view === '3d') {
      // Only update the camera if it's a new camera

      if (pageInView?.camera?.name !== pageCamera?.name) {
        setPageCamera(pageInView.camera)
      }

      pageInView?.camera?.isRotating
        ? setIsRotating(true)
        : setIsRotating(false)
      setDisabledMeshes(pageInView?.disable)
      // hacky way to avoid camera bounce after into
      if (pageInView.camera?.duration !== cameraMoveDuration) {
        setCameraMoveDuration(pageInView.camera?.duration)
      }
    }
  }, [pageInView])

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
          setPageInView={setPageInView}
          navigateToChapter={navigateToChapter}
        />
        {pageInView.text &&
          (pageInView.text?.style === 'static' ||
            pageInView.text?.style === 'animated') && (
            <TextBox
              text={pageInView.text}
              textBoxContainerStyle={textBoxContainerStyle}
              textBoxStyle={textBoxStyle}
              pageScrollProgress={pageScrollProgress}
              isAnimated={pageInView?.text.style === 'animated'}
            />
          )}
        <Canvas
          key='canvas'
          pageCamera={pageCamera}
          cameraMoveDuration={cameraMoveDuration}
          isRotating={isRotating}
          labels={['label']}
          pageScrollProgress={pageScrollProgress}
          disabledMeshes={disabledMeshes}
        />

        {pageInView.view === 'map' && (
          <GeographicMap
            pageInView={pageInView}
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
                hasPageReset={hasPageReset}
                setHasPageReset={setHasPageReset}
              />
            }
          />
          {urls.map(nav => {
            const element =
              nav.url !== '/about' ? (
                <Chapter
                  chapterInView={chapterInView}
                  nextChapter={nav.next}
                  setPageInView={setPageInView}
                  pageInView={pageInView}
                  setNextChapter={updateChapter}
                  pageScrollProgress={pageScrollProgress}
                  updateStepProgress={updateStepProgress}
                  hasPageReset={hasPageReset}
                  setHasPageReset={setHasPageReset}
                />
              ) : (
                <MarkdownPage
                  key={content}
                  fileName={pageInView?.content?.file}
                  setContent={setContent}
                />
              )

            return (
              <Route
                key={`route-${nav.url}`}
                exact
                path={nav.url}
                element={element}
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
                                setHasPageReset={setHasPageReset}

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
