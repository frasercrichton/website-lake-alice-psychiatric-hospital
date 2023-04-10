import Facility from './Facility.jsx'

const Groups = ({ groups, disabledMeshes, labels }) => {
  const getLabel = id => {
    const label = labels?.find(item => item.id === id)
    return label === undefined ? undefined : label.label
  }

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

  return childObjectOfGroups.flat().map(mesh => {
    return (
      <Facility
        key={mesh.name}
        node={mesh}
        label={getLabel(mesh.name)}
        disabledMeshes={disabledMeshes}
      />
    )
  })
}

export default Groups
