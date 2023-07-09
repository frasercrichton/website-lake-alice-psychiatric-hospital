import './CanvasFallbackPage.css'
import Image from '../../components/Image'
import AssetUrlHelper from '../../components/AssetUrlHelper.js'
const assetUrlHelper = new AssetUrlHelper()

const getFloor = disabledMeshes => {
  // Roof is default
  return disabledMeshes?.find(a => a.includes('FirstFloor'))
    ? 'GroundFloor'
    : 'FirstFloor'
}

const CanvasFallbackPage = ({ pageCamera, disabledMeshes, labels }) => {
  let camera = pageCamera?.name.includes('-')
    ? pageCamera?.name.substring(0, pageCamera?.name.indexOf('-'))
    : pageCamera?.name

  camera = labels ? `${camera}Labeled` : camera

  camera = disabledMeshes ? `${camera}${getFloor(disabledMeshes)}` : camera

  const imageName = assetUrlHelper.resolveUrl(
    `${camera}.png`,
    'lake-alice.space/images/'
  )

  return (
    <div className='canvas-fallback-page-wrapper'>
      <div className='canvas-fallback-image-container'>
        <Image src={imageName} />
      </div>

      <div className='performance-warning'>
        The animated 3D version of this website has been disabled for
        performance reasons. If you can access a machine with a GPU you'll see
        the animated version.
        {/* 

    You can try to force WebGL and set this pref to true on the about:config page.
    You can open the about:config page via the location/address bar.
    You can click the button to "Accept the Risk and Continue".
    about:config => webgl.force-enabled = true
    support.mozilla.org/en-US/questions/1334668 */}
      </div>
    </div>
  )
}

export default CanvasFallbackPage
