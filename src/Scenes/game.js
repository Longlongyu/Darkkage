import Player from '../Player/player'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  let config = this.sys.game._GAME_CONFIG
  this.add.image(0, 0, 'background').setOrigin(0)
  let player = new Player(this, 100, 450)

  this._GAME_PLAYER = player
}

GameScene.update = function () {
  let player = this._GAME_PLAYER
  player.updatePlay()
}

export default GameScene