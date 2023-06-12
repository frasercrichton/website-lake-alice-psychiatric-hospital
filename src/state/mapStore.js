import { create } from 'zustand'

const useMapStore = create(set => ({
  mapActiveLabel: '',
  updateMapActiveLabel: mapActiveLabel =>
    set(state => ({ mapActiveLabel: mapActiveLabel }))
}))

export default useMapStore
