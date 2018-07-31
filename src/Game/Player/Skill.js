import Anims from '../Anims'

function Skill(game, packageName, sillGroup={}) {
  let _this = this
  this.anims = new Anims()
  this.group = {}
  this.createSkill = function(skillName, key, skillConfig, start=0, end=2) {
    this.group[skillName] = skillConfig
    if (!this.anims.hasAnims(skillConfig.anims))
      this.anims.addAnims(game, key, this.group[skillName].anims, start, end)
  }
  this.play = function(sprite, skillName, yoyo=true) {
    sprite.anims.play(this.group[skillName].anims, yoyo)
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