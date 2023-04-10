import Facility from './Facility.jsx'

const Meshes = ({ meshes, disabledMeshes, labels }) => {
  const getLabel = id => {
    const label = labels?.find(item => item.id === id)
    return label === undefined ? undefined : label.label
  }

  return meshes.map(mesh => {
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

export default Meshes
