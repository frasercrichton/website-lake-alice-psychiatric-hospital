import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import { Leva } from 'leva'
import './App.css'
import Header from './Header.jsx'
import MarkdownPage from './main-content/MarkdownPage.jsx'
import Cover from './Cover.jsx'
import Canvas from './3d-world/Canvas.jsx'
import headerNavUrls from './config/navigation.js'
import Loader from './components/Loader.jsx'
import chapters from './config/chapters.js'
import GeographicMap from './map/GeographicMap.jsx'
import VideoVimeo from './components/VideoVimeo.jsx'
import Stats from 'stats.js'
import Chapter from './main-content/Chapter.jsx'
import Image from './components/Image.jsx'
import AssetUrlHelper from './components/AssetUrlHelper.js'
import Footer from './main-content/Footer'
import TextBox from './components/TextBox'
import MobileCover from './main-content/MobileView'
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
  const [isRotating, setIsRotating] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [disabledMeshes, setDisabledMeshes] = useState([])

  // page template
  const [isCoverActive, setCoverActive] = useState(true)
  const [introActive, setIntroActive] = useState(true)

  const isLevaHidden = hash !== '#debug'

  // React Router
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Testimony is not included in the nav bar (probably should but needs special handling)
    if (location.pathname === '/testimony') {
      setCoverActive(false)
      setChapterInView(chapters[location.pathname])
      setPageInView(chapters[location.pathname].pages[0])
      setHeaderScrollProgress(0)
    }

    // only update the page if the URL path is recognised
    // this also supports reloading the page url
    if (headerNavUrls.map(item => item.url).includes(location.pathname)) {
      setCoverActive(false)
      setChapterInView(chapters[location.pathname])
      setPageInView(chapters[location.pathname].pages[0])
      setHeaderScrollProgress(0)
      setActiveChapter(location.pathname)
    }
  }, [location])

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

      pageInView?.camera?.isRotating === true
        ? setIsRotating(true)
        : setIsRotating(false)
      setDisabledMeshes(pageInView?.disable)
      // hacky way to avoid camera bounce after into
      if (pageInView.camera?.duration !== cameraMoveDuration) {
        setCameraMoveDuration(pageInView.camera?.duration)
      }
    }

    if (
      pageInView.id?.includes('introduction') &&
      location.pathname !== '/testimony'
    ) {
      setIntroActive(true)
    } else {
      setIntroActive(false)
    }
  }, [pageInView, location])

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

  const handleCoverClick = () => {
    setLoading(!isLoading)
    setCoverActive(!isCoverActive)
  }

  const imageContainerStyle = {
    position: 'fixed',
    display: 'flex'
  }

  const textBoxContainerStyle = {
    position: 'fixed',
    justifyContent: 'center',
    fontSize: '50px'
  }

  const textBoxStyle = {
    margin: '50px'
  }

  const canvasClassName =
    pageInView?.view === '3d'
      ? `container-${pageInView.view} active`
      : 'container-3d'

  const containerScroll = isCoverActive
    ? { overflow: 'hidden' }
    : { overflow: 'scroll' }

  return (
    <div className='site-container' style={containerScroll}>
      <BrowserView>
        <Leva oneLineLabels collapsed hidden={isLevaHidden} />
        <Cover
          key='cover'
          coverActive={isCoverActive}
          handleCoverClick={handleCoverClick}
        />
        <Header
          scrollProgress={headerScrollProgress}
          activeChapter={activeChapter}
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
        <div className={canvasClassName}>
          <Canvas
            key='canvas'
            pageCamera={pageCamera}
            cameraMoveDuration={cameraMoveDuration}
            isRotating={isRotating}
            labels={['label']}
            pageScrollProgress={pageScrollProgress}
            disabledMeshes={disabledMeshes}
          />
        </div>
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
          <div className='static-image-container'>
            <Image
              caption={pageInView.image.caption}
              url={imageURL}
              style={imageContainerStyle}
              source={pageInView.image.source}
            />
          </div>
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
          {headerNavUrls.map(nav => {
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
                <MarkdownPage fileName={pageInView?.content?.file} />
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

        <Footer introActive={introActive} />
      </BrowserView>
      <MobileCover />
    </div>
  )
}

export default App
