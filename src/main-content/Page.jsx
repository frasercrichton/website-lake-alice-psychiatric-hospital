import React, { useEffect, useState } from 'react'
import Image from '../components/Image.jsx'
import TextBox from '../components/TextBox.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
import Content from './Content.jsx'
import './Page.css'
const assetUrlHelper = new AssetUrlHelper()

const Page = ({ page, isIntroduction, pageInView, pageScrollProgress }) => {
  const { pageId, text, image, content, view } = page
  // const scroller = useRef(null)


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

  const textBoxStyle = {
    margin: '50px',
    width: '45%'

    // marginTop: '550px'
  }
  return (
    <div key={`content-block-${pageId}`} className='page-content-container'>
      {isIntroduction && (
        <div className={introClassName}>
          <h1>{text.content}</h1>
        </div>
      )}
      {text?.style === 'scrolling' && (
        <TextBox
          text={text}
          textBoxStyle={textBoxStyle}
          pageScrollProgress={pageScrollProgress}
        />
      )}
      {image != null &&
        (image.style === 'scrolling' || image.style === 'document') && (
          <div className={`${image.style}-image`}>
            <Image
              caption={image.caption}
              source={image.source}
              url={assetUrlHelper.resolveUrl(image.src, '3d-visualisation')}
            />
          </div>
        )}
      {view === 'markdown' && <Content key={pageId} content={content.file} />}
    </div>
  )
}

export default Page
