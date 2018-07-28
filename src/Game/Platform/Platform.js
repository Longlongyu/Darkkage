function Platform(game, num, startX,platformConfig) {
  let _this = this
  const keyArray = (function() {
    let element = []
    for (const key in platformConfig) {
      element.push(key)
    }
    return element
  })()
  this.group = game.physics.add.group()
  this.addPlatform = function(x, y, keyName) {
    let o = _this.group.create(x, y, keyName).setOrigin(0.5)
    o.body.setAllowGravity(false).immovable = true
    return o
  }
  this.randomKeyName = function() {
    return keyArray[Math.floor(Math.random() * keyArray.length)];
  }
  this.repeatPlatform = function(num, startX, platformConfig) {
    let x = startX
    for (let i=num; i>0 ; i--) {
      let name = _this.randomKeyName(),
          y = platformConfig[name].y,
          platform =  _this.addPlatform(x, y, name)
      x += platform.body.width
    }
  }
  function init() {
    _this.repeatPlatform(num, startX,platformConfig)
  }
  init()
}
/*
  platformConfig = {
    x: number,
    y: number,
    keyName: string,
  }
*/
/* function Platform(sence, x, y, texture, frame) {
  Platform.prototype =  new Phaser.GameObjects.Sprite(sence, x, y, texture, frame)
  console.dir(this)   
    // Platform.prototype.body.setAllowGravity(false).immovable = true
} */



export default Platform