import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  preload() {
    this.load.image('background', 'assets/background/bg_layer1.png')
    this.load.image('platform', 'assets/environment/ground_grass.png')
    this.load.image('bunny-stand', 'assets/players/bunny1_stand.png')
  }

  create() {
    console.log(this)

    this.add.image(240, 350, 'background')

    const platforms = this.physics.add.staticGroup()
    const player = this.physics.add.sprite(240, 320, 'bunny-stand').setScale(0.5)

    this.physics.add.collider(platforms, player)

    for (let i = 0; i < 5; i++) {
      const x = Phaser.Math.Between(80, 400)
      const y = 150 * i

      const platform = platforms.create(x, y, 'platform')
      platform.scale = 0.5

      const body = platform.body
      body.updateFromGameObject()
    }
  }
}