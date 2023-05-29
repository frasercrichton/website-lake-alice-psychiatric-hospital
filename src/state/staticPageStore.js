
import { create } from 'zustand'

const useStaticPageStore = create(set => ({
  // Cover Page
  isCoverActive: true,
  toggleCoverActive: () => set(state => ({ isCoverActive: false })),
  // Introduction Page active
  isIntroductionPageActive: false,
  setIsIntroductionPageActive: flag =>
    set(state => ({ isIntroductionPageActive: flag }))
}))

export default useStaticPageStore
