import './TextBox.css'

const TextBox = ({ text, textBoxContainerStyle, textBoxStyle }) => {
  return (
    <div className='text-box-container' style={textBoxContainerStyle}>
      <div className='text-box' style={textBoxStyle}>
        <div>{text.header}</div>
        {text.content}
      </div>
    </div>
  )
}

export default TextBox
