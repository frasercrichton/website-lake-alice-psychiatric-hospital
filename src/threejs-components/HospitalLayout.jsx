import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Facility from './Facility'
import * as THREE from 'three'
// const GLB_LOCATION = process.env.REACT_APP_GLB_LOCATION
const GLB_LOCATION = 'geography-detailed.glb'

const HospitalLayout = ({
  selectedFacility,
  handleFacilityClick,
  hoverName,
  camera,
  cameras,
  setHoverName
}) => {
  const { nodes, materials } = useLoader(GLTFLoader, GLB_LOCATION, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)
  })

  const Facilities = ({ handleFacilityClick }) => {
    const handleHover = (id, e) => {
      if (!selectedFacility !== '') {
        setHoverName(id)
      }
    }
    const output = Object.keys(nodes).map((key, index) => {
      if (nodes[key].type === 'PerspectiveCamera') {
        const camera = nodes[key]
        const cameraConfig = {
          position: [camera.position.x, camera.position.y, camera.position.z],
          rotation: [
            camera.rotation._x,
            camera.rotation._y,
            camera.rotation._z
          ],
          aspect: camera.aspect,
          fov: camera.fov,
          near: camera.near,
          far: camera.far
        }

        cameras.set(key, cameraConfig)
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
