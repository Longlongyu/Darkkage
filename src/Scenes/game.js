import Player from '../Game/Player/Player'
import Platform from '../Game/Platform/Platform'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  const config = this.sys.game._GAME_CONFIG
  this.add.image(0, config.height, 'background').setOrigin(0,1)
  
  const platformConfig = {
    'loading' : {
      y : config.height-100
    }
  }
  const platforms = new Platform(this, 10, 0, platformConfig)
  let gameGroup = this.physics.add.group(platforms.group.getChildren())
  this._GAME_GROUP = gameGroup
  gameGroup.__proto__.setMyVelocityX = function(value) {
    let items = this.getChildren()
    for (let i = 0; i < items.length; i++) {
      items[i].body.velocity.x += value
    }
    return this
  }

  const player = new Player(this, 300, 150)
  this._GAME_PLAYER = player
  this.physics.add.collider(player.sprite, platforms.group)
  this.physics.world.setFPS(60)
}

GameScene.update = function () {
  const player = this._GAME_PLAYER
  const gameGroup = this._GAME_GROUP
  gameGroup.setVelocityX(0)
  player.updatePlay()
}

export default GameScene