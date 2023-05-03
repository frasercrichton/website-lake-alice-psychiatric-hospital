import React from 'react'
import { MobileView } from 'react-device-detect'
import VideoVimeo from '../components/VideoVimeo.jsx'
import Header from './Header.jsx'
import MarkdownPage from './MarkdownPage.jsx'
import './MobileView.css'

const MobileCover = ({
  headerScrollProgress,
  activeChapter,
  navigateToChapter,
  pageInView
}) => {
  const { pageId, text, image, content, view } = pageInView

  return (
    <MobileView viewClassName='mobile'>
      <Header
        scrollProgress={headerScrollProgress}
        activeChapter={activeChapter}
        navigateToChapter={navigateToChapter}
        isMobile
      />

      <div className='mobile-container'>
        
        
        {/* 
        
        final-animation0001-0250.mp4 - animated childrens villa
        10png.png - max with plan
        */}

        {/* <h1>Lake Alice Psychiatric Hospital</h1>
        <h2>
          Te Wāhanga Tamaiti, Taitamariki o Lake Alice Lake Alice Child and
          Adolescent Unit
        </h2> */}

        {view === 'markdown' && content.file !== undefined && (
          <MarkdownPage key={pageId} fileName={content.file} />
        )}

        <VideoVimeo
          id={689154638}
          caption={'Malcolm Richards - Lake Alice Survivor'}
        />
      </div>
    </MobileView>
  )
}

export default MobileCover
