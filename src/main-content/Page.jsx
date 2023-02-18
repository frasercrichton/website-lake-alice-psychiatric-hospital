import React from 'react'
import VideoVimeo from '../components/VideoVimeo.jsx'
import Image from '../components/Image.jsx'
import TextBox from '../components/TextBox.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
import './Page.css'
const assetUrlHelper = new AssetUrlHelper()

const Page = ({ page, stepProgress }) => {
  const img = page.image
    ? assetUrlHelper.resolveUrl(page.image.src, '3d-visualisation')
    : null

  const textBoxStyle = {
    margin: '50px',
    width: '45%'

    // marginTop: '550px'
  }
  return (
    <div key={`content-block-${page.id}`} className='page-content-container'>
      {page.text?.style === 'scrolling' && (
        <TextBox
          text={page.text}
          textBoxStyle={textBoxStyle}
          stepProgress={stepProgress}
        />
      )}
      {img != null && page.image.style === 'scrolling' && (
        <div
          className='scrolling-image'
          style={{ width: '50%', display: 'flex', flexDirection: 'column' }}
        >
          <Image
            caption={page.image.caption}
            source={page.image.source}
            url={img}
          />
        </div>
      )}
    </div>
  )
}

export default Page
