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
  let config = this.sys.game._GAME_CONFIG
  let preloadSprite = this.add.sprite(config.width / 2, config.height / 2,'loading')
  createPreloadSprite.call(this, preloadSprite)

  this.load.image('logo','assets/logo.png')
  this.load.multiatlas('yage', 'assets/yage.json', 'assets')
}

PreloadScene.create = function () {
  // start menu scene
}

export default PreloadScene