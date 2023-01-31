import React, { CSSProperties } from 'react'
import './Page.css'
import { useInView } from 'react-intersection-observer'
import Video from '../components/Video.jsx'
import Image from '../components/Image.jsx'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation'
const transformImageUri = input =>
  /^https?:/.test(input) ? input : `${CDN_URL}${FOLDER}/${input}`

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

  const img = page.image ? transformImageUri(page.image.src) : null

  const defaultStyle: CSSProperties = {
    verticalAlign: 'top',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2d1176',
    color: '#fff'
    // height: item.index !== 1 ? null : '100vh'
  }

  const introBlock = {
    position: 'absolute',
    top: '300px',
    left: '0',
    width: '100%',
    height: '300px',
    zIndex: '400',
    backgroundColor: 'beige',
    opacity: '0.6'
  }

  const introPage = page.index === 1 ? introBlock : null

  return (
    <>
      <div key={`inview-block-${page.id}`} ref={ref} className='inview-block'>
        x
      </div>
      <div
        key={`content-block-${page.id}`}
        style={{ ...defaultStyle, ...introPage }}
        className='content-block'
      >
        <div key={`header-block-${page.id}`} style={{ color: 'black' }}>
          {page.header}
        </div>
        <div
          key={`text-block-${page.id}`}
          style={{ width: '50%', color: 'black' }}
        >
          {page.text}
        </div>
        {/* <div key={`image-block-${item.id}`}> */}
        {img != null && <Image caption={page.image.caption} url={img} />}
        {/* </div> */}
        {page.video && (
          <Video url={page.video.url} caption={page.video.caption} />
        )}
      </div>
    </>
  )
}

export default Page
