import { useMemo } from 'react'
import { useControls } from 'leva'

const SpotLightControls = () => {
  const options = useMemo(() => {
    return {
      Colour: '#ffffff',
      intensity: {
        value: 10000,
        min: 0,
        max: 100000,
        step: 10
      },
      distance: {
        value: 1000,
        min: 0,
        max: 5000,
        step: 5
      },
      shadowNormalBias: {
        value: 2.5,
        min: 0,
        max: 20,
        step: 0.1
      },
      shadowRadius: {
        value: 1,
        min: 0,
        max: 20,
        step: 0.1
      },
      positionX: {
        value: 180,
        min: -360,
        max: 360,
        step: 1
      },
      positionY: {
        value: 60,
        min: 0,
        max: 360,
        step: 1
      },
      positionZ: {
        value: 180,
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
      shadowCameraExtent: {
        value: 10000,
        min: 0,
        max: 10000,
        step: 1
      }
    }
  }, [])

  return useControls('Spotlight', options)
}

export default SpotLightControls
