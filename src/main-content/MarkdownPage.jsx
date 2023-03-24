import Markdown from '../components/markdown/Markdown.jsx'
import AssetUrlHelper from '../components/AssetUrlHelper'
import './MarkdownPage.css'

const MarkdownPage = ({ fileName }) => {

  const assetUrlHelper = new AssetUrlHelper()

  return (
    <div className='markdown-page-container'>
      <div className='markdown'>
        <Markdown
          markdownContent={assetUrlHelper.resolveUrl(
            `${fileName}.md`,
            '3d-visualisation'
          )}
        />
      </div>
    </div>
  )
}

export default MarkdownPage
