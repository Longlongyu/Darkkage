function ceatePlayerAnims(game, name) {
  game.anims.create({
    key: 'leftwait',
    frames: game.anims.generateFrameNames(name, {
      start: 1, end: 3 , zeroPad: 1, prefix: 'wait-', suffix: '.png'}),
    frameRate: 7,
    repeat: -1,
    yoyo: true
  })
  game.anims.create({
    key: 'rightwait',
    frames: game.anims.generateFrameNames(name, {
      start: 4, end: 6 , zeroPad: 1, prefix: 'wait-', suffix: '.png'}),
    frameRate: 7,
    repeat: -1,
    yoyo: true
  })
}

function Player(game, x, y) {

  // Private
  let walkSpeed = 160,
    runSpeed = 250,
    jumpHeight = 430,
    isLeft = true,
    oKey = game.input.keyboard.createCursorKeys(),
    sprite = game.physics.add.sprite(x, y, 'kage', 'wait-1.png')

  // Player animations, waiting, walking left and walking right...
  ceatePlayerAnims(game, 'kage')

  // Public
  this.updatePlay = function() {
    if (oKey.left.isDown){
      sprite.setVelocityX(-walkSpeed)
      // sprite.anims.play('left', true)
      isLeft = true
    } else if (oKey.right.isDown) {
      sprite.setVelocityX(walkSpeed)
      // sprite.anims.play('right', true)
      isLeft = false
    } else{
      sprite.setVelocityX(0)
      isLeft?sprite.anims.play('leftwait',true):sprite.anims.play('rightwait',true)
    }
    if (oKey.up.isDown && sprite.body.touching.down) {
      sprite.setVelocityY(-jumpHeight)
    }
  }
  this.sprite = sprite
}

export default Player