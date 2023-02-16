import './Content.css'
// import { CSSTransition } from 'react-transition-group'
import VideoVimeo from '../components/VideoVimeo.jsx'
import Markdown from '../components/markdown/Markdown.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper'
import mapDisplay from '../map/mapDisplay.json'
// TODO map centre shouldn't be a default
const { zoom, centre, maxBounds } = mapDisplay
const dynamicZoom = 6.5
const lakeAliceCoordinates = { latitude: -40.1254336, longitude: 175.3369864 }
const mapZoomDimensions = {
  zoomSnap: zoom.zoomSnap,
  mapZoom: zoom.default,
  minZoom: zoom.minZoomCityBlock,
  maxZoom: zoom.maxZoomContinent,
  maxBounds: maxBounds,
  initialMapCentre: lakeAliceCoordinates
}

const Content = ({ content }) => {
  const className =
    content !== '' ? 'content-container active' : 'content-container'
  const assetUrlHelper = new AssetUrlHelper
  
  return (
    <div className={className}>
      <div className='content'>
        {(content === 'location' || content === 'testimony') && (
          <div className='header-container'>
            <h2>{content}</h2>
          </div>
        )}
        {(content === 'info' || content === 'about') && (
          <Markdown markdownContent={assetUrlHelper.resolveUrl(`${content}.md`, '3d-visualisation')} />
        )}
        {content === 'testimony' && (
          <VideoVimeo id='689154638' caption='Malcolm Richards' />
        )}
      </div>
    </div>
  )
}

export default Content
