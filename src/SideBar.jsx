import React from 'react'
import './SideBar.css'
import Image from './components/Image'
import Button from './components/Button'
import resources from './data/content.json'
import Icon from './components/icons/Icon'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const SideBar = ({ selectedFacility, setSelectedFacility, setContent }) => {
  const resource = resources[selectedFacility]

  const imageUrl = image => CDN_URL + FOLDER + image.url

  const images =
    resource.images !== undefined
      ? resource.images.map(image => (
          <Image
            id={image.id}
            key={image.id}
            url={imageUrl(image)}
            imageAction={setContent}
            thumbnail
          />
        ))
      : null

  return (
    <div className='side-bar-wrapper'>
      <div className='side-bar-menu'>
        {/* <div>{resource.text}</div> */}
        <div>{images}</div>
        <Button action={setSelectedFacility} label='close' />
      </div>
    </div>
  )
}

export default SideBar
