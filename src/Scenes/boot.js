let BootScene = new Phaser.Scene('boot')

BootScene.preload = function () {
  this.load.image('loading', 'assets/loading.gif')
}

BootScene.create = function () {
  this.scene.start('Preload')
}

export default BootScene