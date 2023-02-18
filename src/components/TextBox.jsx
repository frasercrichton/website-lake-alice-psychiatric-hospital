import React from 'react'
import AssetUrlHelper from './AssetUrlHelper.js'
import AnimatedText from './AnimatedText.jsx'
import './TextBox.css'

const TextBox = ({
  text,
  textBoxStyle,
  stepProgress,
  textBoxContainerStyle,
  isAnimated = false
}) => {
  return (
    <div className='text-box-container' style={textBoxContainerStyle}>
      <div className='text-box' style={textBoxStyle}>
        <div>{text.header}</div>
        <div className='text-box-content'>
          {isAnimated && (
            <AnimatedText text={text.content} stepProgress={stepProgress} />
          )}
          {!isAnimated && text.content}
        </div>
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
