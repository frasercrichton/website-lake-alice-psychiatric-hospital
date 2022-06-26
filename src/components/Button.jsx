import './Button.css'

const Button = ({ action, label }) => {
  return (
    <div className='button-wrapper'>
      <button className='button' onClick={e => action('')}>
        {label}
      </button>
    </div>
  )
}

export default Button
