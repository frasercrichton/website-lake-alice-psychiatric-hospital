import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Camera from './Camera'
import Facility from './Facility'
import * as THREE from 'three'
// const GLB_LOCATION = process.env.REACT_APP_GLB_LOCATION
const GLB_LOCATION = 'geography-detailed.glb'

const HospitalLayout = ({
  selectedFacility,
  handleFacilityClick,
  hoverName,
  camera,
  setHoverName
}) => {
  const { nodes, materials } = useLoader(GLTFLoader, GLB_LOCATION, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
  })
  // console.log(nodes)
  // console.log(materials)
  const Facilities = ({ handleFacilityClick }) => {
    const handleHover = (id, e) => {
      if (!selectedFacility !== '') {
        setHoverName(id)
      }
    }

    const output = Object.keys(nodes).map((key, index) => {
      // console.log(nodes[key].type)

      if (nodes[key].type === 'PerspectiveCamera') {
        return <Camera node={nodes[key]} aspectRatio activeCamera={camera} />
      }

      if (nodes[key].type === 'Mesh') {
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
    <group>
      <Facilities handleFacilityClick={handleFacilityClick} />
    </group>
  )
}

export default HospitalLayout
