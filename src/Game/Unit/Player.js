import Skill from '../Skill'

function Player(game, x, y) {
  const config = game.sys.game._GAME_CONFIG

  // Private
  let walkSpeed = 300,
    jumpHeight = 400,
    name = 'kage',
    scale = 0.3,
    isLeft = false,
    oKey = game.input.keyboard.createCursorKeys()

  // Create the physics-based sprite 
  const sprite = game.physics.add
    .sprite(x, y, 'kage', 'stand_0000_.png')
    .setDrag(1000, 0)
    .setScale(scale)
    .setOffset(0, 9)

  // Change the sprite's position by gravity
  function move() {
    if(isLeft && oKey.left.isDown) { 
      sprite.setVelocityX(-walkSpeed)
    } else if (!isLeft && oKey.right.isDown) {
      sprite.setVelocityX(walkSpeed)
    }
  }

  // Public
  this.sprite = sprite
  this.ative = 'stand'

  // The sprite's skill group
  this.sillGroup = {
    'run' : {
      anims : 'stand',
      skillEffect : move
    },
    'stand' : {
      anims : 'stand',
      skillEffect : function() {
        sprite.setVelocityX(0)
      }
    },
    'drop' : {
      anims : 'drop',
      skillEffect : move
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

  // Update the sprite's ative, animas and position
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