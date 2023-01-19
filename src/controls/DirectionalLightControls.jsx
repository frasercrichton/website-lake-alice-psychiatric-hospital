import { useMemo } from 'react'
import { useControls } from 'leva'
import angleToRadians from '../3d-world/angleHelper'

const positionDefaults = {
  value: 20,
  min: -2000,
  max: 2000,
  step: 0.1
}

const parameters = {
  position: {
    x: 0,
    y: 600,
    z: 400
  }
}

// x: 0,
// y: 300,
// z: 1000
const DirectionalLightControls = () => {
  const options = useMemo(() => {
    return {
      Intensity: {
        value: 2.3,
        min: 0,
        max: 10,
        step: 0.1
      },
      Position: {
        value: {
          x: 600,
          y: 460,
          z: 0
        },
        x: {
          min: -10000,
          max: 10000,
          step: 10
        },
        y: {
          min: -10000,
          max: 10000,
          step: 10
        },
        z: {
          min: -10000,
          max: 10000,
          step: 10
        }
      }
    }
  }, [])

  return useControls('Directional Light', options)
}

export default DirectionalLightControls
