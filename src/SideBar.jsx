import React from 'react'
import './SideBar.css'
import Image from './components/Image'
import Button from './components/Button'
import resources from './data/side-bar-images.json'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const SideBar = ({ selectedFacility, setSelectedFacility }) => {
  const resource = resources[selectedFacility]

  const imageUrl = image => CDN_URL + FOLDER + image.url

  const images = resource.images !== undefined
    ? resource.images.map(image => (
      <Image key={image.id} url={imageUrl(image)} caption={image.caption} />
      ))
    : null

  return (
    <div className='side-bar-wrapper'>
      <span
        onClick={e => setSelectedFacility('')}
        class='material-symbols-outlined'
      >
        close
      </span>
      <div className='side-bar-menu'>
        <div>
          <h2>{resource.title}</h2>
        </div>
        <div>{resource.text}</div>
        <div>{images}</div>
        <Button action={setSelectedFacility} />
      </div>
    </div>
  )
}

export default SideBar
