import { useEffect } from 'react'
import './Content.css'
import { CSSTransition } from 'react-transition-group'
import Video from './components/Video'
import Button from './components/Button'
import Icon from './components/icons/Icon'
import Markdown from './components/Markdown'

import Image from './components/Image'
import Map from './map/Map'
import resources from './data/content.json'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const Content = ({ content, setContent }) => {
  const url = 'https://vimeo.com/565389024'
  const imageUrl = image => CDN_URL + FOLDER + image.url
  const resource = resources[content]

  // const images =
  //   resource !== undefined || resource.images !== undefined
  //     ? resource.images.map(image => (
  //         <Image
  //           id={image.id}
  //           key={image.id}
  //           url={imageUrl(image)}
  //           caption={image.caption}
  //           imageAction={setContent}
  //         />
  //       ))
  //     : null
  return (
    <CSSTransition
      in={content !== ''}
      timeout={500}
      classNames='content-wrappper'
      unmountOnExit
    >
      <div className='content-container'>
        <Icon action={e => setContent('')} iconType='close' />
        <div className='content' key='content'>
          <div className='header-container'>
            <h2>{content}</h2>
          </div>
          {content === 'info' && (
            <Markdown markdownContent='./content/info.md' />
          )}
          {content === 'location' && <Map />}
          {content === 'testimony' && (
            <Video
              url='https://vimeo.com/689154638'
              caption='Malcolm Richards'
            />
          )}
          <Button action={setContent} label='close' />
        </div>
      </div>
    </CSSTransition>
  )
}

export default Content
