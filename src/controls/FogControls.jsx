import { useMemo } from 'react'
import { useControls } from 'leva'

const FogControls = () => {
  const options = useMemo(() => {
    return {
      FogFar: {
        value: 1540,
        min: 0,
        max: 5000,
        step: 10
      },
      FogNear: {
        value: 10,
        min: 0,
        max: 100,
        step: 10
      },
      FogColour: '#ffffff'
    }
  }, [])

  return useControls('Fog', options)
}

export default FogControls
