import './Cover.css'
// import { CSSTransition } from 'react-transition-group'
import Button from './components/Button'
import { useNavigate, Link } from 'react-router-dom'

const Cover = ({ coverActive, handleCoverClick, setContent }) => {
  const action = () => {
    handleCoverClick()
    setContent('testimony')
  }

  const className = coverActive ? 'cover-container active' : 'cover-container'

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
                onClick={e => e => action()}
                className={'nav-item'}
                to='/testimony'
              >
                <Button action={e => action()} label='Testimony' />
              </Link>
              <Link
                role='button'
                onClick={e => e => handleCoverClick()}
                className={'nav-item'}
                to='/introduction'
              >
                <Button action={e => handleCoverClick()} label='explore' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
