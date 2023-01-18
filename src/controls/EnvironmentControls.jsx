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

const LightingControls = () => {
  const options = useMemo(() => {
    return {
      'Directional Intensity': {
        value: 2.3,
        min: 0,
        max: 10,
        step: 0.1
      },
      'Directional Angle': {
        value: Math.PI / 3,
        min: 0,
        max: Math.PI / 3,
        step: 0.1
      },
      'Directional Position': {
        value: {
          x: 0,
          y: 400,
          z: 100
        },
        x: {
          min: 0,
          max: 1000,
          step: 10
        },
        y: {
          min: 0,
          max: 1000,
          step: 10
        },
        z: {
          min: 0,
          max: 1000,
          step: 10
        }
      },
      'Shadow Camera Near': {
        value: 10,
        min: 0,
        max: 10000,
        step: 1
      },
      'Shadow Camera Far': {
        value: 5000,
        min: 0,
        max: 10000,
        step: 1
      },
      'Shadow Camera Extent': {
        value: 5000,
        min: 0,
        max: 10000,
        step: 1
      },
      'Hemisphere Intensity': {
        value: 0.6,
        min: 0,
        max: 10,
        step: 0.1
      },
      'Hemisphere Sky Colour': '#ffffff',
      'Hemisphere Ground Colour': '#111111',
     
    }
  }, [])

  return useControls('Environment', options)
}

export default LightingControls
