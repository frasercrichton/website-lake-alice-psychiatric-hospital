import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Facility from './Facility'
import * as THREE from 'three'
const GLTF_LOCATION = process.env.REACT_APP_GLTF_LOCATION
const HospitalLayout = ({
  selectedFacility,
  handleFacilityClick,
  hoverName,
  setHoverName
}) => {
  const { nodes, materials } = useLoader(GLTFLoader, GLTF_LOCATION)

  const Facilities = ({ handleFacilityClick }) => {
    const handleHover = (id, e) => {
      if (!selectedFacility !== '') {
        setHoverName(id)
      }
    }

    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
      linecap: 'round',
      linejoin: 'round'
    })

    const output = Object.keys(nodes).map((key, index) => {
      if (nodes[key].type === 'LineSegments') {
        return (
          <lineSegments geometry={nodes[key].geometry} material={material} />
        )
      }

      if (nodes[key].type === 'Mesh' || nodes[key].type === 'Object3D') {
        return (
          <Facility
            key={index}
            node={nodes[key]}
            material={nodes[key].material}
            defaultMaterial={materials.selected}
            selectedFacility={selectedFacility}
            handleFacilityClick={handleFacilityClick}
            handleHover={handleHover}
            hoverName={hoverName}
          />
        )
      }
      return null
    })
    return output
  }

  return (
    <group dispose={null} scale={0.4}>
      <Facilities handleFacilityClick={handleFacilityClick} />
    </group>
  )
}

export default HospitalLayout
