import './Content.css'
import { CSSTransition } from 'react-transition-group'
import Video from './components/Video'
import Markdown from './components/markdown/Markdown'

import Map from './map/Map'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const Content = ({ content }) => {
  const className =
    content !== '' ? 'content-container active' : 'content-container'

  return (
    <div className={className}>
      <div className='content'>
        {(content === 'location' || content === 'testimony') && (
          <div className='header-container'>
            <h2>{content}</h2>
          </div>
        )}
        {(content === 'info' || content === 'about') && (
          <Markdown markdownContent={CDN_URL + FOLDER + content + '.md'} />
        )}
        {content === 'testimony' && (
          <Video url='https://vimeo.com/689154638' caption='Malcolm Richards' />
        )}
        {content === 'location' && <Map />}
      </div>
    </div>
  )
}

export default Content
