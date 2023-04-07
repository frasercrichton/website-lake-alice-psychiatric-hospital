import Facility from './Facility.jsx'
import facilities from '../config/facilities.json'

const findFacility = id => {
  const facility = facilities.find(facility => facility.id === id)
  return facility?.type === 'significant' ? facility : ''
}

const Meshes = ({ meshes, disabledMeshes }) => {
  return meshes.map(element => {
    return (
      <Facility
        key={element.name}
        node={element}
        label={findFacility(element.name)}
        disabledMeshes={disabledMeshes}
      />
    )
  })
}

export default Meshes
