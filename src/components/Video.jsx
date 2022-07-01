import ReactPlayer from 'react-player'
import React, { useRef, useState, useEffect } from 'react'
import './Video.css'
import Loader from './Loader'
// import '~video-react/dist/video-react.css'
// import myVideo from 'https://vimeo.com/689154638'

const Video = ({ url, caption }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const playerRef = useRef()

  useEffect(() => {
    if (playerRef.current != undefined) {
      const { player } = playerRef.current.getState()
      console.log(player.currentTime) // print current time
    }
    const timer = setTimeout(() => {
      setLoading(!isLoading)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='video-container'>
      <div className='player-wrapper flex-item'>
        <ReactPlayer
          className='react-player'
          width='100%'
          height='100%'
          playIcon={<button className='play-button'>Play</button>}
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
      </div>
      <div className='video-caption flex-item'>{caption}</div>
      {isLoading && <Loader />}
    </div>
  )
}

export default Video
