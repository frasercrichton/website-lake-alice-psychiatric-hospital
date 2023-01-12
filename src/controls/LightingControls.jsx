import { useMemo } from 'react'
import { useControls } from 'leva'
import angleToRadians from '../scene-3d/angleHelper'

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

const LightingControls = () => {
  // const lightingDefaults = {
  //   min: 0,
  //   max: 10,
  //   step: 0.1
  // }

  // const parameters = {
  //   'Ambient Light': {
  //     Intensity: 1,
  //   },
  //  }

  // const options = useMemo(() => {
  //   return {
  //     Ambient: {
  //       value: {
  //         Intensity: 1,
  //       },
  //       Intensity: {
  //         ...lightingDefaults
  //       },
  //     }
  // }}, [])

  // const parameters = {
  //   position: {
  //     x: 0,
  //     y: 600,
  //     z: 400
  //   },
  //   rotation: {
  //     x: -angleToRadians(50),
  //     y: 0,
  //     z: 0
  //   }
  // }
  // return {
  //     'Ground': '#ffffff',
  //     'World': '#343333',
  //     Building: '#979797',
  //     'Selected Building': '#c15f5f'
  //   }

  const options = useMemo(() => {
    return {
      'Ambient Intensity': {
        value: 0.3,
        min: 0,
        max: 10,
        step: 0.1
      },
      'Hemisphere Intensity': {
        value: 0.6,
        min: 0,
        max: 10,
        step: 0.1
      },
      'Hemisphere Sky Colour': '#ffffff',
      'Hemisphere Ground Colour': '#111111',
      'Spotlight Intensity': {
        value: 2.3,
        min: 0,
        max: 10,
        step: 0.1
      }
    }
  }, [])

  return useControls('Lighting', options)
}

export default LightingControls
