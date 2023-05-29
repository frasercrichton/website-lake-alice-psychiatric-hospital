import { create } from 'zustand'

const useMapStore = create(set => ({
  activeLabel: '',
  updateActiveLabel: activeLabel => set(state => ({ activeLabel: activeLabel })),
  activeLabels: new Map(),
  // remove previous and add new
  updateActiveLabels: activeLabel => set(state => ({ activeLabel: activeLabel }))
}))

export default useMapStore
