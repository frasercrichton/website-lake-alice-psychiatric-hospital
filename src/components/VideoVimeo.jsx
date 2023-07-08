import React, { useState } from 'react'
import './VideoVimeo.css'
import Loader from './Loader.jsx'

const VideoVimeo = ({ id, caption }) => {
  const [isLoading, setLoading] = useState(true)
  const playerStyle = {
    width: '95%',
    height: '95%'
  }

  return (
    <div className='video-container'>
      <iframe
        src={`https://player.vimeo.com/video/${id}?h=40f705173c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        frameborder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowfullscreen
        style={playerStyle}
        title={caption}
        onLoad={e => {
          setLoading(!isLoading)
        }}
      ></iframe>
      {isLoading && <Loader />}
    </div>
  )
}

export default VideoVimeo
