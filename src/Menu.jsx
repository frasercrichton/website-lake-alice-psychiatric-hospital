import './Menu.css'
import significantFacilities from './data/significantFacilities.json'

const Menu = ({ setContent }) => {
  return (
    <div className='menu-wrapper'>
      <h2>Site</h2>
      <div className='menu-items'>
        <ul className='menu-items-list'>
          {
          Object.keys(significantFacilities).map((key, value) => {
            return <li key={key}>{significantFacilities[key]}</li>
          })
          }
        </ul>
      </div>
      <h2>Context</h2>
      <div className='menu-items'>
        <ul className='menu-items-list'>
          <li onClick={e => setContent('testimony')}>Testimony</li>
          <li onClick={e => setContent('history')}>History</li>
          <li onClick={e => setContent('location')}>Location</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
