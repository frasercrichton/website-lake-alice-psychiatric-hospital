import ReactPlayer from 'react-player'
import React from 'react'
import './Video.css'

const Video = ({ url, caption }) => {
  return (
    <div className='video-wrapper'>
      <ReactPlayer url={url} />
    </div>
  )
}

export default Video
