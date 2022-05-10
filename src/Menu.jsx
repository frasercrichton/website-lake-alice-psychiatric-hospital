import './Menu.css'
const Menu = ({ setContent }) => {
  return (
    <div className='menu-wrapper'>
      <div>Site</div>
      <div className='menu-items'>
        <ul className='menu-items-list'>
          <li>Maximum Security Block</li>
          <li>Childrens' Villas</li>
          <li>Eleven Bed Villas</li>
          <li>Disturbed Patients Villa</li>
        </ul>
      </div>
      <div>Context</div>
      <div className='menu-items'>
        <ul className='menu-items-list'>
          <li onClick={e => setContent('testimony')}>Testimony</li>
          <li onClick={e => setContent('history')}>History</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
