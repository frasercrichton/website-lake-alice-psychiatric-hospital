export default class Sizes {
  // window.innerHeight / 2 to increase performance
  constructor () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }
}
