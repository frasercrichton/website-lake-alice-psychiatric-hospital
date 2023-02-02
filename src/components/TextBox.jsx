import './TextBox.css'

const TextBox = ({ text }) => {
  return (
    <div className='text-box-container'>
      <div className='text-box'>
        <div>{text.header}</div>
        {text.content}
      </div>
    </div>
  )
}

export default TextBox
