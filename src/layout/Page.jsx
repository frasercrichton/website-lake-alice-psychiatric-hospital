import React, { useEffect, useState } from 'react'
import Image from '../components/Image.jsx'
import TextBox from '../components/TextBox.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
import MarkdownPage from './MarkdownPage.jsx'
import InteractiveMenu from '../components/InteractiveMenu.jsx'
import './Page.css'
const assetUrlHelper = new AssetUrlHelper()

const textBoxStyle = {
  margin: '50px',
  width: '45%',
}

const Page = ({ page, isIntroduction, pageInView, pageScrollProgress }) => {
  const { pageId, text, image = {}, content, view, map } = page
  const { src, style, recordID, author, caption, date, URL } = image

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
      {image != null && style === 'scrolling' && (
        <div className={`${style}-image-container`}>
          <Image
            caption={caption}
            src={assetUrlHelper.resolveUrl(src, 'lake-alice.space')}
            recordID={recordID}
            author={author}
            date={date}
            URL={URL}
          />
        </div>
      )}
      {view === 'markdown' && (
        <MarkdownPage key={pageId} content={content.file} />
      )}
      {view === 'map-animated' &&
        map?.visibleMapLayers?.minorPoints?.points !== undefined && (
          <InteractiveMenu minorPoints={map?.visibleMapLayers?.minorPoints} pageInView={pageInView} />
        )}
    </div>
  )
}

export default Page
