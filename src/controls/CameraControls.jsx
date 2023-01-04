import React, { useMemo } from 'react'
import { useControls } from 'leva'

const positionDefaults = {
  value: 20,
  min: 0,
  max: 200,
  step: 1
}

const rotationDefaults = {
  value: 0,
  min: -Math.PI,
  max: Math.PI,
  step: 0.1
}

const CameraControls = () => {
  const parameters = {
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0
    }
  }

  const options = useMemo(() => {
    return {
      Position: {
        value: {
          x: parameters.position.x,
          y: parameters.position.y,
          z: parameters.position.z
        },
        x: {
          ...positionDefaults
        },
        y: {
          ...positionDefaults
        },
        z: {
          ...positionDefaults
        }
      },
      Rotation: {
        value: {
          x: parameters.rotation.x,
          y: parameters.rotation.y,
          z: parameters.rotation.z
        },
        x: {
          ...rotationDefaults
        },
        y: {
          ...rotationDefaults
        },
        z: {
          ...rotationDefaults
        }
      }
    }
  }, [])

  const lookAndFeel = useControls('Look and Feel', {
    'Background Colour': '#fff'
  })

  return useControls('Camera', options)
}

export default CameraControls
