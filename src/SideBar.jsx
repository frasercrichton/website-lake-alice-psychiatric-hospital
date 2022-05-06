import React, { useState } from 'react'
import './SideBar.css'
import Image from './components/Image'
import resources from './side-bar-images.json'

const Header = props => {
  const [isActive, setActive] = useState(false)

  const resource = resources[1]
  const url = 'https://d10yslqdemxz8r.cloudfront.net/'
  const folder = '3d-visualisation/'
  const imageUrl = url + folder + resource.url
  const modalState = () => setActive(!isActive)
  return (
    <div className='side-bar-wrapper'>
      <div className='side-bar-menu'>
        <div><h2>Maximum Security Unit</h2></div>

        <Image url={imageUrl} caption={resource.caption} />

        <div className='close' onClick={e => modalState()}>
          close
        </div>
      </div>
    </div>
  )
}

export default Header
