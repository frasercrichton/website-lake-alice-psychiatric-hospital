import './CanvasFallbackPage.css'
import Image from '../../components/Image'
const CanvasFallbackPage = ({ pageCamera }) => {
  // console.log(pageCamera.name)
  return (
    <div className='canvas-fallback-page-wrapper'>
      <div className='mobile-image-container'>
        <Image src='https://d10yslqdemxz8r.cloudfront.net/lake-alice.space/images/fc-20230314-00001-R26288154-0001.jpg' />
      </div>

      <div className='performance-warning'>
        The animated 3D version of this website has been disabled for
        performance reasons.
        {/* {pageCamera?.name} */}
      </div>
    </div>
  )
}

export default CanvasFallbackPage
