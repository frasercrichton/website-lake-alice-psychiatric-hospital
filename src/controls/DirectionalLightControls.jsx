import { useMemo } from 'react'
import { useControls } from 'leva'
// 180 60 180
const DirectionalLightControls = () => {
  const options = useMemo(() => {
    return {
      DirectionalLightColour: '#ffffff',
      DirectionalLightIntensity: {
        value: 2.6,
        min: 0,
        max: 10,
        step: 0.1
      },
      DirectionalLightShadowNormalBias: {
        value: 6.6,
        min: 0,
        max: 20,
        step: 0.1
      },
      DirectionalLightShadowRadius: {
        value: 1,
        min: 0,
        max: 20,
        step: 0.1
      },

      positionX: {
        value: 53,
        min: -360,
        max: 360,
        step: 1
      },
      positionY: {
        value: 100,
        min: 0,
        max: 360,
        step: 1
      },
      positionZ: {
        value: -272,
        min: -360,
        max: 360,
        step: 1
      },
      Near: {
        value: 0.1,
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
      DirectionalLightShadowCameraExtent: {
        value: 1000,
        min: 0,
        max: 10000,
        step: 1
      }
    }
  }, [])

  return useControls('Directional Light', options)
}

export default DirectionalLightControls
