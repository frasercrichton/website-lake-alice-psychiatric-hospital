import React, { CSSProperties } from 'react'
import './Page.css'
import { useInView } from 'react-intersection-observer'
import VideoVimeo from '../components/VideoVimeo.jsx'
import Image from '../components/Image.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper.js'
const assetUrlHelper = new AssetUrlHelper()

const Page = ({ setPageInView, page }) => {
  const { ref, inView, entry } = useInView({
    key: page.id,
    threshold: 0.5,
    initialInView: false,

    onChange: (inView, ref, entry) => {
      if (inView) {
        setPageInView(page)
      }
    }
  })

  const img = page.image ? assetUrlHelper.resolveUrl(page.image.src) : null

  const defaultStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2d1176',
    color: '#fff'
    // backgroundColor: '#ff0000'
    // width: 'fit-content'
    // height: item.index !== 1 ? null : '100vh'
  }

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

  return (
    <>
      <div
        key={`inview-block-${page.id}`}
        ref={ref}
        className='inview-block'
      ></div>
      <div
        key={`content-block-${page.id}`}
        style={{ ...defaultStyle, ...introPage }}
        className='content-block'
      >
        {page.text.style === 'scrolling' && (
          <>
            <div key={`header-block-${page.id}`} style={{ color: 'black' }}>
              {page.text.header}
            </div>
            <div
              key={`text-block-${page.id}`}
              style={{ width: '50%', color: 'black' }}
            >
              {page.text.content}
            </div>
          </>
        )}

        {img != null && !page.image.static && (
          <Image caption={page.image.caption} url={img} />
        )}
      </div>
    </>
  )
}

export default Page
