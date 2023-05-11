import { create } from 'zustand'

const useStore = create(set => ({
  activeLabel: '',
  updateActiveLabel: activeLabel => set(state => ({ activeLabel: activeLabel }))
}))

export default useStore
