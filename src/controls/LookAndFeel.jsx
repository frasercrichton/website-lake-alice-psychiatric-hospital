import { useMemo } from 'react'
import { useControls } from 'leva'

const LookAndFeelControls = () => {
  const options = useMemo(() => {
    return {
      Ground: '#999999',
      World: '#343333',
      Building: '#ffffff',
      'Selected Building': '#c15f5f'
    }
  }, [])

  return useControls('Look and Feel', options)
}

export default LookAndFeelControls
