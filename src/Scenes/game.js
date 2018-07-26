import Player from '../Player/Player'
import Platform from '../Platform/Platform'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  const config = this.sys.game._GAME_CONFIG
  this.add.image(0, config.height, 'background').setOrigin(0,1)
  const player = new Player(this, 300, 150)
  const platformConfig = {
    'loading' : {
      y : config.height-100
    }
  }
  const platforms = new Platform(this, 10, 0, platformConfig)

  this.physics.add.collider(player.sprite, platforms.group)
  this._GAME_PLAYER = player
}

GameScene.update = function () {
  const player = this._GAME_PLAYER
  player.updatePlay()
}

export default GameScene