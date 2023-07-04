import { useMemo } from 'react'
import { useControls } from 'leva'

const HemisphereLightControls = () => {
  const options = useMemo(() => {
    return {
      HemisphereLightIntensity: {
        value: 0.1,
        min: 0,
        max: 10,
        step: 0.1
      },
      HemisphereLightColour: '#ffffff',
      HemisphereSkyColour: '#ffffff',
      HemisphereGroundColour: '#dcdcdc'
    }
  }, [])

  return useControls('Hemisphere Light', options)
}

export default HemisphereLightControls
