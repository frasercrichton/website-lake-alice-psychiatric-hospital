import './Menu.css'
import significantFacilities from './data/significantFacilities.json'
import MenuItem from './components/MenuItem'

const Menu = ({ setContent, selectedFacility, setSelectedFacility }) => {
  const sortStringKeys = (a, b) => {
    console.log(a)
    return String(a).localeCompare(b)
  }
  return (
    <div className='menu-wrapper'>
      <h2>Site</h2>
      <div className='menu-items'>
        <ul className='menu-items-list'>
          {Object.keys(significantFacilities)
            .sort()
            .map((key, value) => {
              return (
                <MenuItem
                  key={key}
                  action={setSelectedFacility}
                  isActive={selectedFacility === key}
                  id={key}
                  label={significantFacilities[key]}
                />
              )
            })}
        </ul>
      </div>
      <h2>Context</h2>
      <div className='menu-items'>
        <ul className='menu-items-list'>
          <MenuItem
            key='architecture'
            action={e => setContent('architecture')}
            id='architecture'
            label='Architecture'
          />
          <MenuItem
            key='history'
            action={e => setContent('history')}
            id='history'
            label='History'
          />
          <MenuItem
            key='location'
            action={e => setContent('location')}
            id='location'
            label='Location'
          />
          <MenuItem
            key='testimony'
            action={e => setContent('testimony')}
            id='testimony'
            label='Testimony: Malcolm Richards'
          />
        </ul>
      </div>
    </div>
  )
}

export default Menu
