import AssetUrlHelper from './AssetUrlHelper'
import './TextBox.css'

const TextBox = ({ text, textBoxContainerStyle, textBoxStyle }) => {
  return (
    <div className='text-box-container' style={textBoxContainerStyle}>
      <div className='text-box' style={textBoxStyle}>
        <div>{text.header}</div>
        <div>{text.content}</div>
        {text.source && (
          <div className='source'>
            <a
              target='_blank'
              rel='noreferrer'
              href={new AssetUrlHelper().resolveUrl(text.source, 'documents')}
            >
              Source
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default TextBox
