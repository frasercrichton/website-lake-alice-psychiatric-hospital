import { useMemo } from 'react'
import { useControls } from 'leva'

const HemisphereLightControls = () => {
  const options = useMemo(() => {
    return {
      HemisphereLightIntensity: {
        value: 0.4,
        min: 0,
        max: 10,
        step: 0.1
      },
      HemisphereLightPosition: {
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
      },
      HemisphereLightColour: '#ffffff',
      HemisphereSkyColour: '#ffffff',
      HemisphereGroundColour: '#111111'
    }
  }, [])

  return useControls('Hemisphere Light', options)
}

export default HemisphereLightControls
