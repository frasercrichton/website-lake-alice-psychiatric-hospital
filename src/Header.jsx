import './Header.css'
const Header = ({ scrollProgress, handleClick, enableClose, props }) => {
  return (
    <header>
      <nav className='home'>
        <a href='/'>
          <h1>Lake Alice Psychiatric Hospital</h1>
        </a>
      </nav>
      <nav className='main-navigation'>
        <ul>
          <li>
            <a href='/'>Context</a>
          </li>
          <li>
            <a href='/'>Pathways</a>
          </li>
          <li>
            <a href='/'>Abuse</a>
          </li>
          <li>
            <a href='/'>Accountability?</a>
          </li>
          <li>
            <a href='/'>The UN</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
        </ul>
      </nav>
      <div style={{'transform': `scaleX(${scrollProgress})` }} className='scroller-progress-bar'></div>
    </header>
  )
}

export default Header
