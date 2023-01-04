import { useMemo } from 'react'
import { useControls } from 'leva'

const LookAndFeelControls = () => {
  const options = useMemo(() => {
    return {
      'Background Colour': '#ffffff',
      'World Colour': '#0a0a0a',
      Building: '#8d8d8d',
      'Selected Building': '#c15f5f'
    }
  }, [])

  return useControls('Look and Feel', options)
}

export default LookAndFeelControls
