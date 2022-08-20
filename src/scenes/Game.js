import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  preload() {
    this.load.image('background', 'assets/background/bg_layer1.png')
  }

  create() {
    console.log(this)
    this.add.image(240, 350, 'background')
  }
}