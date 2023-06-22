export default class AssetUrlHelper {
  resolveUrl (resourceName, folderPrefix) {
    const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
    return /^https?:/.test(resourceName)
      ? resourceName
      : `${CDN_URL}${folderPrefix || ''}${resourceName}`
  }
}
