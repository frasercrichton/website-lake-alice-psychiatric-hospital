import Markdown from '../components/markdown/Markdown.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper'
import './MarkdownPage.css'
const assetUrlHelper = new AssetUrlHelper()

const MarkdownPage = ({ fileName }) => {
  return (
    <div className='markdown-page-container'>
      <Markdown
        markdownContent={assetUrlHelper.resolveUrl(
          `${fileName}.md`,
          '3d-visualisation'
        )}
      />
    </div>
  )
}

export default MarkdownPage
