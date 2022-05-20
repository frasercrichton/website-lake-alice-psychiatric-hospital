import React, { useState, useContext } from 'react'
import './SideBar.css'
import Image from './components/Image'
import Button from './components/Button'
import resources from './side-bar-images.json'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const SideBar = ({ selectedFacility, setSelectedFacility }) => {
  const resource = resources[selectedFacility]

  const imageUrl = image => CDN_URL + FOLDER + image.url

  const isSideBarActiveToggle =
    selectedFacility !== '' ? 'side-bar-wrapper active' : 'side-bar-wrapper'
  const images = resource.images.map(image => (
    <Image key={image.id} url={imageUrl(image)} caption={image.caption} />
  ))

  return (
    <div className={isSideBarActiveToggle}>
      <span onClick={e => setSelectedFacility('')} class='material-symbols-outlined'>close</span>
      <div className='side-bar-menu'>
        <div>
          <h2>{resource.title}</h2>
        </div>
        <div>{resource.text}</div>
        <div>{images}</div>
        {/*
         */}
        <Button action={setSelectedFacility} />
      </div>
    </div>
  )
}

export default SideBar
