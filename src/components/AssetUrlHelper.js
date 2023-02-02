export default class AssetUrlHelper {
  resolveUrl (input) {
    const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
    const FOLDER = '3d-visualisation'

    return /^https?:/.test(input) ? input : `${CDN_URL}${FOLDER}/${input}`
  }
}
