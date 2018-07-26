import Skill from './Skill'

function Player(game, x, y) {
  // Private
  let walkSpeed = 300,
    name = 'kage',
    runSpeed = 250,
    jumpHeight = 430,
    isLeft = false,
    oKey = game.input.keyboard.createCursorKeys(),
    sprite = game.physics.add.sprite(x, y, 'kage', 'stand_0000_.png')

  // Public
  this.sprite = sprite
  this.ative = 'stand'
  this.sillGroup = {
    'run' : {
      skillEffect : function() {
        isLeft?sprite.setVelocityX(-walkSpeed):sprite.setVelocityX(walkSpeed)
      }
    },
    'stand' : {
      skillEffect : function() {
        sprite.setVelocityX(0)
      }
    },
    'drop' : {
      skillEffect : function() {
      }
    },
    'jump' : {
      skillEffect : function() {
        sprite.setVelocityY(-jumpHeight)
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
    } else if (sprite.body._dy > 0) {
      this.ative = 'drop'
    } else {
      this.ative = 'stand'
    }
    if (oKey.up.isDown && sprite.body.touching.down) {
      // this.skill.play(sprite, 'jump')
      sprite.setVelocityY(-jumpHeight)
    }
    this.skill.play(sprite, this.ative)
  }

  function init() {
    
  }
  init()
}

export default Player