import './Cover.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import useStaticPageStore from '../state/staticPageStore.js'

const Cover = () => {
  const [isCoverActive, toggleCoverActive] = useStaticPageStore(
    state => [state.isCoverActive, state.toggleCoverActive]
    // shallow
  )

  const className = isCoverActive ? 'cover-container active' : 'cover-container'

  return (
    <div key='cover-container' className={className}>
      <div className='default-cover-container'>
        <div className='cover-content'>
          <div className='main-content'>
            <div className='header'>
              <h1>Lake Alice Psychiatric Hospital</h1>
              <h2>Te Wāhanga Tamaiti, Taitamariki o Lake Alice</h2>
              <h2>Lake Alice Child and Adolescent Unit</h2>
            </div>
            <div className='navigation'>
              <Link
                role='button'
                onClick={e => toggleCoverActive()}
                className='nav-item'
                to='/testimony'
              >
                <Button action={e => toggleCoverActive()} label='Testimony' />
              </Link>
              <Link
                role='button'
                onClick={e => toggleCoverActive()}
                className='nav-item'
                to='/introduction'
              >
                <Button action={e => toggleCoverActive()} label='Explore' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
