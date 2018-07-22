let MenuScene = new Phaser.Scene('menu')

MenuScene.preload = function () {

}

MenuScene.create = function () {
  this.scene.start('game')
}

export default MenuScene