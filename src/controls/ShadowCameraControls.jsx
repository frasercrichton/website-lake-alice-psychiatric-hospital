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
    x: 290,
    y: 600,
    z: 400
  }
}

const ShadowCameraControls = () => {
  const options = useMemo(() => {
    return {
      Near: {
        value: 10,
        min: 0,
        max: 10000,
        step: 1
      },
      Far: {
        value: 1500,
        min: 0,
        max: 10000,
        step: 1
      },
      Extent: {
        value: 1000,
        min: 0,
        max: 10000,
        step: 1
      }
    }
  }, [])

  return useControls('Shadow Camera', options)
}

export default ShadowCameraControls

// 'Hemisphere Intensity': {
//   value: 0.6,
//   min: 0,
//   max: 10,
//   step: 0.1
// },
// 'Hemisphere Sky Colour': '#ffffff',
// 'Hemisphere Ground Colour': '#111111',
