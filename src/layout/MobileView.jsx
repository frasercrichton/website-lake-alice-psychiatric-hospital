import React from 'react'
import { MobileView } from 'react-device-detect'
import Cover from './Cover.jsx'
import VideoVimeo from '../components/VideoVimeo.jsx'

const MobileCover = () => (
  <MobileView viewClassName='mobile'>
    {/* <Cover
          key='cover'
          coverActive={isCoverActive}
          handleCoverClick={handleCoverClick}
        /> */}

    <h1>Lake Alice Psychiatric Hospital</h1>
    <h2>
      Te Wāhanga Tamaiti, Taitamariki o Lake Alice Lake Alice Child and
      Adolescent Unit
    </h2>

    <VideoVimeo
      id={689154638}
      caption={'Malcolm Richards - Lake Alice Survivor'}
    />
  </MobileView>
)

export default MobileCover
