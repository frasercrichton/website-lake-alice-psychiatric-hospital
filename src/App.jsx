import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import { Leva } from 'leva'
import './App.css'
import Header from './layout/Header.jsx'
import MarkdownPage from './layout/MarkdownPage.jsx'
import Cover from './layout/Cover.jsx'
import Canvas from './3d-world/Canvas.jsx'
import Loader from './components/Loader.jsx'
import GeographicMap from './map/GeographicMap.jsx'
import VideoVimeo from './components/VideoVimeo.jsx'
import Chapter from './layout/Chapter.jsx'
import Image from './components/Image.jsx'
import Footer from './layout/Footer.jsx'
import TextBox from './components/TextBox.jsx'
import Timeline from './components/Timeline.jsx'
import MobileCover from './layout/MobileView.jsx'
// Config
import headerNavUrls from './config/navigation.js'
import chapters from './config/chapters.js'
import Stats from 'stats.js'
import AssetUrlHelper from './components/AssetUrlHelper.js'
// state
import useStaticPageStore from './state/staticPageStore.js'
import useHeaderScrollProgress from './state/scrollProgressStore.js'

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
  const [hasChapterReset, setHasChapterReset] = useState(false)

  const [pageInView, setPageInView] = useState('') // TODO -  useState('') >  useState(null)
  const [pageNumber, setPageNumber] = useState(0)
  const oddOrEvenPage = pageNumber % 2 === 0 ? 'even' : 'odd'

  // Scrollarama state
  const [pageScrollProgress, setPageScrollProgress] = useState(null)

  // Header Navigation Scroll state
  const [updateHeaderScrollProgress] = useHeaderScrollProgress(
    state => [state.updateHeaderScrollProgress]
    // shallow
  )

  // 3D Model
  const [pageCamera, setPageCamera] = useState(null)
  const [cameraMoveDuration, setCameraMoveDuration] = useState(2000)
  const [isRotating, setIsRotating] = useState(false)
  const [disabledMeshes, setDisabledMeshes] = useState([])
  const [labels, setLabels] = useState([])

  // page template
  const [isCoverActive, toggleCoverActive, setIsIntroductionPageActive] =
    useStaticPageStore(
      state => [
        state.isCoverActive,
        state.toggleCoverActive,
        state.setIsIntroductionPageActive
      ]
      // shallow
    )

  const isLevaHidden = hash !== '#debug'

  // React Router
  const navigate = useNavigate()
  const location = useLocation()

  // this handles using the browser url address bar to navigate
  useEffect(() => {
    // Testimony is not included in the nav bar (probably should but needs special handling)
    if (location.pathname === '/testimony') {
      toggleCoverActive()
      setChapterInView(chapters[location.pathname])
      setPageInView(chapters[location.pathname].pages[0])
    }

    // only update the page if the URL path is recognised
    // this also supports reloading the page url
    if (headerNavUrls.map(item => item.url).includes(location.pathname)) {
      toggleCoverActive()
      setChapterInView(chapters[location.pathname])
      setPageInView(chapters[location.pathname].pages[0])
      setActiveChapter(location.pathname)
    }
  }, [location, toggleCoverActive])

  useEffect(() => {
    if (pageInView.view === '3d') {
      pageInView?.camera?.isRotating === true
        ? setIsRotating(true)
        : setIsRotating(false)
    }
  }, [pageInView])

  useEffect(() => {
    if (pageInView.view === '3d') {
      // Only update the camera if it's a new camera
      if (pageInView?.camera?.name !== pageCamera?.name) {
        setPageCamera(pageInView.camera)
      }

      setDisabledMeshes(pageInView?.disable)

      setLabels(pageInView?.labels)
      // hacky way to avoid camera bounce after into
      if (pageInView.camera?.duration !== cameraMoveDuration) {
        setCameraMoveDuration(pageInView.camera?.duration)
      }
    }
  }, [pageInView, cameraMoveDuration, pageCamera])

  // Scroll progress bar state
  useEffect(() => {
    // -1 to account for the double 'introduction' pages
    const totalNumberOfPages = chapterInView.pages.length - 1
    const currentPageNumber = pageInView.index
    // if 0 no progress
    // if 1 > percentage
    // if on About or Testimony set the progress bar to complete
    if (totalNumberOfPages === 0) {
      updateHeaderScrollProgress(1)
      return
    }
    // otherwise calculate the scroll progress
    updateHeaderScrollProgress(currentPageNumber / totalNumberOfPages)
  }, [pageInView, chapterInView.pages, updateHeaderScrollProgress])

  useEffect(() => {
    if (
      pageInView.id?.includes('introduction') &&
      location.pathname !== '/testimony' &&
      location.pathname !== '/about'
    ) {
      setIsIntroductionPageActive(true)
    } else {
      setIsIntroductionPageActive(false)
    }
  }, [pageInView, location, setIsIntroductionPageActive])

  const updateChapter = chapter => {
    setActiveChapter(chapter)
    navigate(chapter)
  }

  const navigateToChapter = name => {
    setActiveChapter(name)
    // setPageInView({...chapterInView.pages[chapters] })
    setChapterInView(chapters[name])
    navigate(name)
    setHasChapterReset(true)
  }

  const updateStepProgress = progressCount => {
    setPageScrollProgress(progressCount)
  }

  const imageURL = pageInView.image
    ? assetUrlHelper.resolveUrl(pageInView.image.src, 'lake-alice.space')
    : null

  const visibleMapLayers =
    pageInView.map && pageInView.map.visibleMapLayers
      ? pageInView.map.visibleMapLayers
      : null

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
    : { overflowY: 'scroll' }

  const { text, image, video } = pageInView

  return (
    <div className='site-container' style={containerScroll}>
      <MobileCover
        activeChapter={activeChapter}
        navigateToChapter={navigateToChapter}
        pageInView={pageInView}
        pageNumber={pageNumber}
      />

      <BrowserView>
        <Leva oneLineLabels collapsed hidden={isLevaHidden} />
        <Cover key='cover' />
        <Header
          activeChapter={activeChapter}
          navigateToChapter={navigateToChapter}
        />
        
        {/* Visuals */}
        {text &&
          (text?.style === 'static' || text?.style === 'animated') &&
          oddOrEvenPage === 'odd' && (
            <TextBox
              pageNumber={pageNumber}
              text={text}
              textBoxContainerStyle={textBoxContainerStyle}
              textBoxStyle={textBoxStyle}
              isStatic={text.style === 'static'}
            />
          )}
        {text &&
          (text?.style === 'static' || text?.style === 'animated') &&
          oddOrEvenPage === 'even' && (
            <TextBox
              pageNumber={pageNumber}
              text={text}
              textBoxContainerStyle={textBoxContainerStyle}
              textBoxStyle={textBoxStyle}
              isStatic={text.style === 'static'}
            />
          )}

        <div className={canvasClassName}>
          <Canvas
            key='canvas'
            pageCamera={pageCamera}
            cameraMoveDuration={cameraMoveDuration}
            isRotating={isRotating}
            // pageScrollProgress={pageScrollProgress}
            disabledMeshes={disabledMeshes}
            labels={labels}
          />
        </div>
        {pageInView.view?.includes('map') && (
          <GeographicMap
            visibleMapLayers={visibleMapLayers}
            map={pageInView.map}
          />
        )}
        {video !== undefined && (
          <VideoVimeo id={video.id} caption={video.caption} />
        )}
        {image && (image?.style === 'static' || image?.style === 'document') && (
          <div className={`${image?.style}-image-container`}>
            <Image
              caption={image.caption}
              src={imageURL}
              author={image.author}
              recordID={image.recordID}
              date={image.date}
              URL={image.URL}
            />
          </div>
        )}
        <Timeline decade={pageInView.decade} />
        {/* steps */}
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
                hasChapterReset={hasChapterReset}
                setChapterReset={setHasChapterReset}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            }
          />
          {headerNavUrls.map(nav => {
            const chapters =
              nav.url !== '/about' ? (
                <Chapter
                  chapterInView={chapterInView}
                  nextChapter={nav.next}
                  setPageInView={setPageInView}
                  pageInView={pageInView}
                  setNextChapter={updateChapter}
                  pageScrollProgress={pageScrollProgress}
                  updateStepProgress={updateStepProgress}
                  hasChapterReset={hasChapterReset}
                  setChapterReset={setHasChapterReset}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                />
              ) : (
                <MarkdownPage fileName={pageInView?.content?.file} />
              )

            return (
              <Route
                key={`route-${nav.url}`}
                exact
                path={nav.url}
                element={chapters}
              />
            )
          })}
        </Routes>

        <Footer />
      </BrowserView>
    </div>
  )
}

export default App
