import Player from '../Game/Unit/Player'
import Platform from '../Game/Platform/Platform'

let GameScene = new Phaser.Scene('game')

GameScene.create = function () {
  const config = this.sys.game._GAME_CONFIG
  // Create scene map
  const map = this.make.tilemap({ key: "map" })
  const tiles = map.addTilesetImage("twin_dragons_0", "tiles")
  map.createDynamicLayer("Background", tiles)
  this.groundLayer = map.createDynamicLayer("Group", tiles)

  // Create a player and his a sprite and add a camera to follow player's sprite
  const spawnPoint = map.findObject("Player", obj => true)
  const player = new Player(this, spawnPoint.x, spawnPoint.y)
  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
  this.cameras.main.startFollow(player.sprite, false)
  
  // Create the physics-based collider
  this.groundLayer.setCollisionByProperty({ collides: true })  
  this.physics.world.addCollider(player.sprite, this.groundLayer)

  // this._GAME_GROUP = gameGroup
  this._GAME_PLAYER = player
}

GameScene.update = function () {
  const player = this._GAME_PLAYER
  player.updatePlay()
}

export default GameScene