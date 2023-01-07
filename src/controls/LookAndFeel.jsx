import { useMemo } from 'react'
import { useControls } from 'leva'

const LookAndFeelControls = () => {
  const options = useMemo(() => {
    return {
      'Ground': '#ffffff',
      'World': '#343333',
      Building: '#979797',
      'Selected Building': '#c15f5f'
    }
  }, [])

  return useControls('Look and Feel', options)
}

export default LookAndFeelControls
