import { useMemo } from 'react'
import { useControls } from 'leva'
import angleToRadians from '../3d-world/angleHelper'

const positionDefaults = {
  value: 20,
  min: -2000,
  max: 2000,
  step: 0.1
}

const rotationDefaults = {
  value: 0,
  min: -Math.PI,
  max: Math.PI,
  step: 0.1
}

const CameraControls = ({ camera }) => {
  const parameters = {
    position: {
      x: 0,
      y: 600,
      z: 400
    },
    rotation: {
      x: -angleToRadians(50),
      y: 0,
      z: 0
    }
  }

  const options = useMemo(() => {
    return {
      Position: {
        value: {
          x: parameters.position.x,
          y: parameters.position.y,
          z: parameters.position.z
        },
        x: {
          ...positionDefaults
        },
        y: {
          ...positionDefaults
        },
        z: {
          ...positionDefaults
        }
      },
      Rotation: {
        value: {
          x: parameters.rotation.x,
          y: parameters.rotation.y,
          z: parameters.rotation.z
        },
        x: {
          ...rotationDefaults
        },
        y: {
          ...rotationDefaults
        },
        z: {
          ...rotationDefaults
        }
      }
    }
  }, [parameters.position.x, parameters.position.y, parameters.position.z])

  return useControls('Camera', options)
}

export default CameraControls
