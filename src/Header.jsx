import './Header.css'
import Icon from './components/icons/Icon'
const Header = ({ handleClick, enableClose, props }) => {
  return (
    <header>
      <nav>
        <a href='/'>
          <h1>Lake Alice</h1>
        </a>
        {enableClose && <Icon action={e => handleClick('')} iconType='close' />}
      </nav>
    </header>
  )
}

export default Header
