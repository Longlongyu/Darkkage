import BootScene from './Scenes/boot'
import PreloadScene from './Scenes/preload'

let App = function() {}

App.prototype.start = function() {
  let scenes = [] // Save states group object
  
  scenes.push(BootScene)
  scenes.push(PreloadScene)

  let config = { // Game config
    type: Phaser.AUTO,
    parent: 'phaser-app',
    width: 800,
    height: 600,
    scene: scenes,
    tiele: 'Darkkage'
  }
    
  let game = new Phaser.Game(config) // Create game app
  
  
}

window.onload = function() { //Game start
  let app = new App()
  app.start()
}