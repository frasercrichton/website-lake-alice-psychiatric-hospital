import React, { useEffect, useState } from 'react'
import Image from '../components/Image.jsx'
import TextBox from '../components/TextBox.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
import MarkdownPage from './MarkdownPage.jsx'
import './Page.css'
const assetUrlHelper = new AssetUrlHelper()

const textBoxStyle = {
  margin: '50px',
  width: '45%'
}

const Page = ({ page, isIntroduction, pageInView, pageScrollProgress }) => {
  const { pageId, text, image, content, view } = page
  const [introActive, setIntroActive] = useState(true)

  useEffect(() => {
    if (pageInView.id?.includes('introduction')) {
      setIntroActive(true)
    } else {
      setIntroActive(false)
    }
  }, [pageInView])

  const introClassName = introActive
    ? 'content-introduction active'
    : 'content-introduction'

  return (
    <div key={`content-block-${pageId}`} className='page-content-container'>
      {isIntroduction && (
        <div className={introClassName}>{/* <h1>{text.content}</h1> */}</div>
      )}
      {text?.style === 'scrolling' && (
        <TextBox
          text={text}
          textBoxStyle={textBoxStyle}
          pageScrollProgress={pageScrollProgress}
        />
      )}
      {image != null && image.style === 'scrolling' && (
        <div className={`${image.style}-image-container`}>
          <Image
            caption={image.caption}
            src={assetUrlHelper.resolveUrl(image.src, '3d-visualisation')}
            source={image.source}
          />
        </div>
      )}
      {view === 'markdown' && (
        <MarkdownPage key={pageId} content={content.file} />
      )}
    </div>
  )
}

export default Page
