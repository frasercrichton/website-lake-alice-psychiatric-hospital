import { useNavigate, Link } from 'react-router-dom'
import urls from './config/navigation.jsx'
import './Header.css'
const Header = ({ scrollProgress }) => {
  const navigate = useNavigate()
  const handleNavigationClick = url => {
    navigate(url)
  }
  return (
    <header>
      <nav className='main-navigation'>
        <ul>
          {urls.map(nav => {
            return (
              <li>
                <Link
                  // role='button'
                  // onClick={e => handleNavigationClick(nav.url)}
                  // href='#'
                  to={nav.url}
                >
                  {nav.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div
        style={{ transform: `scaleX(${scrollProgress})` }}
        className='scroller-progress-bar'
      ></div>
        <nav className='home'>
        <a href='/'>
          <h1>Lake Alice Psychiatric Hospital</h1>
        </a>
      </nav>
    
    </header>
  )
}

export default Header
