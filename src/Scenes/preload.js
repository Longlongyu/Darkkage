let PreloadScene = new Phaser.Scene('Preload')

function createPreloadSprite(osprite) {
  let width = osprite.width
  this.load.on('progress', function progressEventListener(value) {
    osprite.cutWidth = parseInt(width * value)
  })
  this.load.on('complete', function completeEventListener() {
    osprite.destroy()
  })
}

PreloadScene.preload = function () {
  const config = this.sys.game._GAME_CONFIG
  let preloadSprite = this.add.sprite(config.width / 2, config.height / 2,'loading')
  createPreloadSprite.call(this, preloadSprite)

  
  this.load.image('logo','assets/logo.png')
  this.load.multiatlas('kage', 'assets/kage.json', 'assets')
  this.load.image("tiles", "assets/twin_dragons_0.png")
  this.load.tilemapTiledJSON("map", "assets/test.json")
}

PreloadScene.create = function () {
  this.scene.start('menu')
}

export default PreloadScene