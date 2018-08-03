function Anims() {
  let array = []

  this.addAnims = function(game, packageName, keyName, start, end) {
    game.anims.create({
      key: keyName,
      frames: game.anims.generateFrameNames(packageName, {
        start: start, end: end , zeroPad: 4, prefix: `${keyName}_`, suffix: '_.png'}),
      frameRate: 5,
      repeat: -1,
      yoyo: true
    })
    array.push(keyName)
  }

  this.hasAnims = function(keyName) {
    return array.includes(keyName)
  }
}

export default Anims