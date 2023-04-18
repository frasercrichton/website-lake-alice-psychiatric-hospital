import Mesh from './Mesh.jsx'

const Meshes = ({ meshes, labels }) => {
  const getLabel = id => {
    const label = labels?.find(item => item.id === id)
    return label === undefined ? undefined : label.label
  }

  return meshes.map(mesh => {
    return <Mesh key={mesh.name} node={mesh} label={getLabel(mesh.name)} />
  })
}

export default Meshes
