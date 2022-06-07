import ReactPlayer from 'react-player'
import React, { useState, useEffect } from 'react'
import './Video.css'
import Loader from './Loader'

const Video = ({ url, caption }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!isLoading)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='video-container'>
      <Loader isLoading={isLoading} />
      <ReactPlayer
        playIcon={<button className='play-button'>Play</button>}
        className='video-player'
        width='100%'
        height='800px'
        controls
        poster='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        playing={isPlaying}
        onPlay={() => setPlaying(!isPlaying)}
        url={url}
        config={{
          vimeo: {
            playerOptions: { controls: true }
          }
        }}
        onReady={e => setLoading(isLoading)}
      />
      <p className='video-caption'>{caption}</p>
    </div>
  )
}

export default Video
