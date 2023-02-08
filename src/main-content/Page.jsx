import React, { CSSProperties } from 'react'
import './Page.css'
import { useInView } from 'react-intersection-observer'
import VideoVimeo from '../components/VideoVimeo.jsx'
import Image from '../components/Image.jsx'
import TextBox from '../components/TextBox'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
const assetUrlHelper = new AssetUrlHelper()

const Page = ({ setPageInView, page, nextChapter, setNextChapter }) => {
  const { ref: content, inView: contentInView } = useInView({
    key: page.id,
    threshold: 0.5,
    initialInView: false,

    onChange: (inView, ref) => {
      // console.log('ref', ref.target)
      // console.log('entry', entry)
      if (inView) {
        setPageInView(page)
      }
    }
  })

  const { ref: next, inView: inViewNext } = useInView({
    key: page.id,
    threshold: 0.5,
    initialInView: false,

    onChange: (inView, ref) => {
      // console.log('next', ref.target)
      if (inView) {
        setNextChapter(nextChapter)
      }
    }
  })

  const img = page.image ? assetUrlHelper.resolveUrl(page.image.src) : null

  const introBlock = {
    position: 'absolute',
    top: '300px',
    left: '0',
    width: '100%',
    height: '300px',
    zIndex: '400',
    backgroundColor: '#A0A0A0',
    opacity: '0.6'
  }

  const introPage = page.index === 1 ? null : null

  const textBoxStyle = {
    margin: '50px'
    // marginTop: '550px'
  }

  return (
    <>
      <div
        key={`inview-block-${page.id}`}
        ref={content}
        className='inview-block'
      ></div>
      <div key={`content-block-${page.id}`} className='page-content-container'>
        {page.text?.style === 'scrolling' && (
          <TextBox text={page.text} textBoxStyle={textBoxStyle} />
        )}
        {img != null && page.image.style === 'scrolling' && (
          <div
            className='scrolling-image'
            style={{ width: '50%', display: 'flex', flexDirection: 'column' }}
          >
            <Image caption={page.image.caption} url={img} />
          </div>
        )}
      </div>
      {nextChapter && (
        <div
          className='inview-next-block'
          style={{ height: `80vw` }}
          key={`next-block-${page.id}`}
          ref={next}
        ></div>
      )}
    </>
  )
}

export default Page
