import Skill from './Skill'

function Player(game, x, y) {
  const config = game.sys.game._GAME_CONFIG
  const gameGroup = game._GAME_GROUP
  // Private
  let walkSpeed = 300,
    name = 'kage',
    runSpeed = 250,
    jumpHeight = 430,
    isLeft = false,
    oKey = game.input.keyboard.createCursorKeys(),
    sprite = game.physics.add.sprite(x, y, 'kage', 'stand_0000_.png')
  function move() {
    let array = gameGroup.getChildren()
    if(isLeft && oKey.left.isDown) { 
      if(sprite.x <= config.width/2 && array[0].x <= 0) {
        sprite.setVelocityX(0)
        gameGroup.setMyVelocityX(walkSpeed)
      } else {
        sprite.setVelocityX(-walkSpeed)
      }
    } else if (!isLeft && oKey.right.isDown) {
      if(sprite.x >= config.width/2 && array[array.length-1].x >= config.width) {
        sprite.setVelocityX(0)
        gameGroup.setMyVelocityX(-walkSpeed)
      } else {
        sprite.setVelocityX(walkSpeed)
      }
    }
  }
  // Public
  this.sprite = sprite
  this.ative = 'stand'
  this.sillGroup = {
    'run' : {
      anims : 'stand',
      skillEffect : function() {
        move()
      }
    },
    'stand' : {
      anims : 'stand',
      skillEffect : function() {
        sprite.setVelocityX(0)
      }
    },
    'drop' : {
      anims : 'drop',
      skillEffect : function() {
        move()
      }
    },
    'jump' : {
      anims : 'drop',
      skillEffect : function() {
        sprite.setVelocityY(-jumpHeight)
        move()
      }
    }
  }
  
  this.skill = new Skill(game, name, this.sillGroup)

  this.updatePlay = function() {
    isLeft?sprite.setFlip(false,false):sprite.setFlip(true,false)
    if (oKey.left.isDown){
      isLeft = true
      this.ative = 'run'
    } else if (oKey.right.isDown) {
      isLeft = false
      this.ative = 'run'
    } else {
      this.ative = 'stand'
    }
    if (!sprite.body.touching.down) {
      this.ative = 'drop'
    }
    if (oKey.up.isDown && sprite.body.touching.down) {
      this.ative = 'jump'
    }
    this.skill.play(sprite, this.ative)
  }

  function init() {
    sprite.body.setCollideWorldBounds(true)
    sprite.body.setMass(1.5)
  }
  init()
}

export default Player