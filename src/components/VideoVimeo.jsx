import ReactPlayer from 'react-player'
import React, { useRef, useState, useEffect } from 'react'
import './VideoVimeo.css'
import Loader from './Loader.jsx'
// import '~video-react/dist/video-react.css'
// import myVideo from 'https://vimeo.com/689154638'

const VideoVimeo = ({ id, caption }) => {
  const [isLoading, setLoading] = useState(true)
  const playerStyle = {
    // position: 'relative',
    // display: 'block',
    width: '95%',
    height: '95%'
  }

  const src = `https://player.vimeo.com/video/${id}?h=40f705173c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`

  return (
    <div className='video-container'>
      <iframe
        src={src}
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
