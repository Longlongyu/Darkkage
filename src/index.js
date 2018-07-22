import BootScene from './Scenes/boot'
import PreloadScene from './Scenes/preload'
import MenuScene from './Scenes/menu'
import GameScene from './Scenes/game'

let App = function() {}

App.prototype.start = function() {
  let scenes = [] // Save states group object
  
  scenes.push(BootScene)
  scenes.push(PreloadScene)
  scenes.push(MenuScene)
  scenes.push(GameScene)
    
  let config = { // Game config
    type: Phaser.AUTO,
    parent: 'phaser-app',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 300},
        debug: false
      }
    },
    scene: scenes,
    tiele: 'Darkkage'
  }

  let game = new Phaser.Game(config) // Create game app
  
  game._GAME_CONFIG = config // Globals
}

window.onload = function() { //Game start
  let app = new App()
  app.start()
}