import Anims from './Anims'

function Skill(game, packageName, sillGroup={}) {
  let _this = this
  this.anims = new Anims()
  this.group = {}
  this.createSkill = function(skillName, key, skillConfig, start=0, end=2) {
    this.group[skillName] = skillConfig
    this.anims.addAnims(game, key, skillName, start, end)
  }
  this.play = function(sprite, skillName, yoyo=true) {
    sprite.anims.play(skillName, yoyo)
    this.group[skillName].skillEffect()
  }
  function init() {
    for (let skill in sillGroup) {
      _this.createSkill(skill, packageName, sillGroup[skill])
    }
  }
  init()
}

export default Skill