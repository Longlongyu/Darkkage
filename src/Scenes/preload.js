let PreloadScene = new Phaser.Scene('Preload')

PreloadScene.preload = function () {
  let preloadSprite = this.add.sprite(50, 200,'loading')
  this.load.setPreloadSprite(preloadSprite)

  this.load.image('logo','assets/logo.png')
  this.load.multiatlas('yage', 'assets/yage.json', 'assets')
}

PreloadScene.create = function () {
  
}

export default PreloadScene