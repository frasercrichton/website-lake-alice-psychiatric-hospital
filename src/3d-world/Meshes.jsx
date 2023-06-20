import * as THREE from 'three'
import Mesh from './Mesh.jsx'
import getLabel from './labelText.js'

const Meshes = ({ meshes, labels }) => {
  const staticMaterials = {
    roads: new THREE.MeshStandardMaterial({
      name: 'roads',
      color: '#585858',
      roughness: 1,
      metalness: 0,
      flatShading: false
    }),
    'lake-surface': new THREE.MeshStandardMaterial({
      name: 'lake-surface',
      color: 0xc000000,
      roughness: 0.31599998474121094,
      metalness: 0.42399996519088745,
      flatShading: false
    })
  }

  const verticalOffset = 0.4

  const getMaterial = name => {
    const materialName = name === undefined ? '' : name.split('.')[0]

    return materialName !== ''
      ? staticMaterials[materialName]
      : staticMaterials.default
  }

  return meshes.map(mesh => {
    return (
      <Mesh
        key={mesh.name}
        node={mesh}
        material={getMaterial(mesh.material.name)}
        verticalOffset={verticalOffset}
        label={getLabel(mesh.name, labels)}
      />
    )
  })
}

export default Meshes
