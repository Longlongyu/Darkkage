let gameGroup = this.physics.add.group(platforms.group.getChildren())

gameGroup.__proto__.setMyVelocityX = function(value) {
  let items = this.getChildren()
  for (let i = 0; i < items.length; i++) {
    items[i].body.velocity.x += value
  }
  return this
}