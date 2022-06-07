import './Cover.css'
import { CSSTransition } from 'react-transition-group'
import Button from './components/Button'
import Image from './components/Image'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation/'

const Cover = ({ coverActive, setCoverActive, setContent }) => {
  const imageUrl =
    CDN_URL + FOLDER + 'fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg'
  const action = () => {
    setCoverActive(!coverActive)
    setContent('testimony')
  }
  return (
    <CSSTransition
      in={coverActive}
      timeout={800}
      classNames='cover-wrappper'
      unmountOnExit
    >
      <div key='cover-container' className='cover-container'>
        {/* <div className='cover-overlay'> </div> */}
        <div className='default-cover-container'>
          <div className='cover-content'>
            <h2>Lake Alice Psychiatric Hospital</h2>

            <div className='navigation'>
              <Button
                action={e => action()}
                label='Testimony'
              />
              <Button action={e => setCoverActive(!coverActive)} label='explore' />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Cover
