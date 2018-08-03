import Player from '../Game/Unit/Player'
import Platform from '../Game/Platform/Platform'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  const config = this.sys.game._GAME_CONFIG

  const map = this.make.tilemap({ key: "map" })
  const tiles = map.addTilesetImage("twin_dragons_0", "tiles")

  map.createDynamicLayer("Black", tiles)
  map.createDynamicLayer("Based-2", tiles)
  map.createDynamicLayer("Based-3", tiles)
  map.createDynamicLayer("Based", tiles)
  this.groundLayer = map.createDynamicLayer("Background", tiles)

  /* const platformConfig = {
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
  } */

  // Create a player and his a sprite
  const spawnPoint = map.findObject("Player", obj => true)
  const player = new Player(this, spawnPoint.x, spawnPoint.y)

  // Add a camera to follow player's sprite
  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
  this.cameras.main.startFollow(player.sprite, false)
  
  // Create the physics-based collider
  this.groundLayer.setCollisionByProperty({ collides: true })  
  this.physics.world.addCollider(player.sprite, this.groundLayer)

  this.physics.world.setFPS(60)

  // this._GAME_GROUP = gameGroup
  this._GAME_PLAYER = player
}

GameScene.update = function () {
  const player = this._GAME_PLAYER
  player.updatePlay()
}

export default GameScene