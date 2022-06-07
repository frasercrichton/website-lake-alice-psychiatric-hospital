import './Loader.css'
import PuffLoader from 'react-spinners/PuffLoader'

const Loader = ({ isLoading, loaded }) => {
  const cssProperties = {
    display: 'block'
  }
  // Spinner only displays until the video loads then it needs sent
  // to the background so the video is clickable
  const zindex = !isLoading ? { zIndex: '-1' } : { zIndex: '2' }

  return (
    <div style={zindex} className='loader-container'>
      <div className='loader'>
        <PuffLoader
          css={cssProperties}
          color='#ffffff'
          loading={isLoading}
          size={150}
        />
      </div>
    </div>
  )
}

export default Loader
