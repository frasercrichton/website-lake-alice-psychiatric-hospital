import React, { useMemo } from 'react'
import { useControls } from 'leva'

const LookAndFeelControls = () => {
  const options = useMemo(() => {
    return {
      'Background Colour': '#ffffff'
    }
  }, [])

  return useControls('Look and Feel', options)
}

export default LookAndFeelControls
