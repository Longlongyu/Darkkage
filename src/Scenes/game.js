import Player from '../Player/player'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  const config = this.sys.game._GAME_CONFIG
  this.add.image(0, config.height, 'background').setOrigin(0,1)
  let player = new Player(this, 300, 150)

  let platforms = this.physics.add.staticGroup()
  platforms.create(100, config.height, 'loading').setOrigin(0.5)
  player.sprite.body.width = player.sprite.body.width / 2
  player.sprite.setOffset(player.sprite.body.width/2, 0)

  this.physics.add.collider(player.sprite, platforms)
  this._GAME_PLAYER = player
}

GameScene.update = function () {
  const player = this._GAME_PLAYER
  player.updatePlay()
}

export default GameScene