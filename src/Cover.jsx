import './Cover.css'
import { CSSTransition } from 'react-transition-group'
import Button from './components/Button'
const Cover = ({ coverActive, setCoverActive }) => {
  return (
    <CSSTransition
      in={coverActive}
      timeout={500}
      classNames='cover-wrappper'
      unmountOnExit
    >
      <div key='cover-wrapper' className='cover-wrapper'>
        <h2>The Moral Drift</h2>
        <h2>Lake Alice Psychiatric Hospital - Child and Adolescent Unit</h2>
        
        <i>content that may disturb</i>
        <div>
          <Button action={e => setCoverActive(!coverActive)} />
        </div>
      </div>
    </CSSTransition>
  )
}

export default Cover
