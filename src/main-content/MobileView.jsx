import React from 'react'
import {
  MobileView
} from 'react-device-detect'

const MobileCover = () => (
  <MobileView viewClassName='mobile'>
    <h1>Mobile not supported</h1>
  </MobileView>
)

export default MobileCover