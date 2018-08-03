import Player from '../Game/Unit/Player'
import Platform from '../Game/Platform/Platform'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  const config = this.sys.game._GAME_CONFIG

  // Add a background image
  this.add.image(0, config.height, 'background').setOrigin(0,1)
  
  const platformConfig = {
    'loading' : {
      y : config.height-100
    }
  }
  const platforms = new Platform(this, 10, 0, platformConfig)
  let gameGroup = this.physics.add.group(platforms.group.getChildren())
  
  gameGroup.__proto__.setMyVelocityX = function(value) {
    let items = this.getChildren()
    for (let i = 0; i < items.length; i++) {
      items[i].body.velocity.x += value
    }
    return this
  }

  // Create a player and his a sprite
  const player = new Player(this, 300, 150)
  // Add a camera to follow player's sprite
  this.cameras.main.setBounds(0, 0, 1920, config.height)
  this.cameras.main.startFollow(player.sprite, false)
  
  // Create the physics-based collider
  this.physics.add.collider(player.sprite, platforms.group)
  this.physics.world.setFPS(60)

  this._GAME_GROUP = gameGroup
  this._GAME_PLAYER = player
}

GameScene.update = function () {
  const player = this._GAME_PLAYER
  player.updatePlay()
}

export default GameScene