function Platform(game, num, startX,platformConfig) {
  let _this = this
  const keyArray = (function() {
    let element = []
    for (const key in platformConfig) {
      element.push(key)
    }
    return element
  })()
  this.group = game.physics.add.staticGroup()
  
  this.addPlatform = function(x, y, keyName) {
    return _this.group.create(x, y, keyName).setOrigin(0.5)
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

export default Platform