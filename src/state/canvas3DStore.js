import { create } from 'zustand'

const useCanvas3DStore = create(set => ({
  isRotating: '',
  updateIsRotating: isRotating => set(state => ({ isRotating: isRotating }))
}))

export default useCanvas3DStore
