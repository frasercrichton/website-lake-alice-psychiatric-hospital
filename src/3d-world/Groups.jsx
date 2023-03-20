import Facility from './Facility.jsx'
import facilities from '../config/facilities.json'

const findFacility = id => {
  const x = facilities.find(facility => facility.id === id)
  return x?.type === 'significant' ? x : ''
}

const Groups = ({ groups, disabledMeshes }) => {
  const childObjectOfGroups = groups.map(element => {
    const parentName = element.name
    const position = element.position
    const rotation = element.rotation
    const childWithPOsition = element.children.map(element => {
      const nameSuffix = element.name.split('_')[1]
      const childName = nameSuffix === undefined ? '' : nameSuffix
      const name = `${parentName}_${childName}`
      return {
        ...element,
        ...{ position: position, rotation: rotation, name: name }
      }
    })
    return childWithPOsition
  })

  return childObjectOfGroups.flat().map(element => {
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

export default Groups
