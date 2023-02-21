import React, { useEffect, useState } from 'react'
import Image from '../components/Image.jsx'
import TextBox from '../components/TextBox.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
import Content from './Content.jsx'
import './Page.css'
const assetUrlHelper = new AssetUrlHelper()

const Page = ({ page, isIntroduction, pageInView, pageScrollProgress }) => {
  const [introActive, setIntroActive] = useState(true)

  useEffect(() => {
    if (pageInView.id?.includes('introduction')) {
      setIntroActive(true)
    } else {
      setIntroActive(false)
    }
  }, [pageInView])

  const introClassName = introActive
    ? 'active content-introduction'
    : 'content-introduction'

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
      {isIntroduction && (
        <div className={introClassName}>
          <h1>{page.text.content}</h1>
        </div>
      )}
      {page.text?.style === 'scrolling' && (
        <TextBox
          text={page.text}
          textBoxStyle={textBoxStyle}
          pageScrollProgress={pageScrollProgress}
        />
      )}
      {img != null && page.image.style === 'scrolling' && (
        <div
          className='scrolling-image'
          style={{ width: '50%', display: 'flex', flexDirection: 'column', height: '200px' }}
        >
          <Image
            caption={page.image.caption}
            source={page.image.source}
            url={img}
          />
        </div>
      )}
      {page.view === 'markdown' && (
        <Content
          key={page.id}
          content={page.content.file}
        />
      )}
    </div>
  )
}

export default Page
