import { useMemo } from 'react'
import { useControls } from 'leva'

const LookAndFeelControls = () => {
  const options = useMemo(() => {
    return {
      World: '#eeeeee'
    }
  }, [])

  return useControls('Look and Feel', options)
}

export default LookAndFeelControls
