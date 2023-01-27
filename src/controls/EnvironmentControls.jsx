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
      Near: {
        value: 10,
        min: 0,
        max: 10000,
        step: 1
      },
      HemisphereIntensity: {
        value: 0.6,
        min: 0,
        max: 10,
        step: 0.1
      },
      skyColour: '#ffffff',
      groundColour: '#111111'
    }
  }, [])

  return useControls('Environment', options)
}

export default LightingControls
