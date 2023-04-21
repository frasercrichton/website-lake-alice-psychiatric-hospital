import React, { useRef } from 'react'
import AssetUrlHelper from './AssetUrlHelper.js'
import './TextBox.css'

const TextBox = ({
  text,
  textBoxStyle,
  textBoxContainerStyle,
  isStatic = false,
  pageNumber
}) => {
  const className = isStatic ? 'text-box-static' : 'text-box'

  return (
    <div className='text-box-container' style={textBoxContainerStyle}>
      <div className={className} style={textBoxStyle}>
        <div className='text-box-content'>{text.content}</div>
        {text.source && (
          <div className='source'>
            <a
              target='_blank'
              rel='noreferrer'
              href={new AssetUrlHelper().resolveUrl(text.source, 'documents')}
            >
              SOURCE
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default TextBox
