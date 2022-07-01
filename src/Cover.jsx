import './Cover.css'
import { CSSTransition } from 'react-transition-group'
import Button from './components/Button'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const Cover = ({ coverActive, handleCoverClick, setContent }) => {
  const imageUrl =
    CDN_URL + FOLDER + 'fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg'
  const action = () => {
    handleCoverClick()
    setContent('testimony')
  }

  const className = coverActive ? 'cover-container active' : 'cover-container'

  return (
    <div key='cover-container' className={className}>
      {/* <div className='cover-overlay'> </div> */}
      <div className='default-cover-container'>
        <div className='cover-content'>
          <div className='header'>
            <h1>Te Wāhanga Tamaiti, Taitamariki o Lake Alice</h1>
            <h1>Lake Alice Child and Adolescent Unit</h1>
          </div>
          <div className='main-content'>
            <div>
              <p className='content-warning'>
                Graphic content warning: some of the content included here may
                raise difficult emotional issues.
              </p>
            </div>
            <div className='navigation'>
              <Button action={e => action()} label='Testimony' />
              <Button action={e => handleCoverClick()} label='explore' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
