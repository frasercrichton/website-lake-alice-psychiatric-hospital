import { create } from 'zustand'

const useHeaderScrollProgress = create(set => ({
  headerScrollProgress: 0.3,
  updateHeaderScrollProgress: progress => set(state => ({ headerScrollProgress: progress }))
}))

export default useHeaderScrollProgress