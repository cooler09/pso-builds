import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { CharacterMin } from "./character-min";
import { SkillType } from "./skill-type";

export class Character {
  id: string;
  name: string;
  tabIndex: number;
  skillTree: SkillTree;
  availableSkills: number;
  selectedLevel: number = 75;
  selectedCoSP: number = 0;
  constructor(
    id: string,
    name: string,
    tabIndex: number,
    skillTree: SkillTree
  ) {
    this.id = id;
    this.tabIndex = tabIndex;
    this.name = name;
    this.skillTree = skillTree;

    this.updateAvailableSP();
  }
  resetSkills() {
    this.skillTree.skillTreeRows.forEach((row) => {
      row.forEach((skill) => {
        if (skill) {
          let refSkill = this.skillTree[skill];
          if (
            refSkill &&
            refSkill.skillType !== SkillType.Passive &&
            refSkill.skillType !== SkillType.LevelReq
          ) {
            refSkill.currentLevel = 0;
            this.validateChildDependecies(refSkill);
          }
        }
      });
    });
    this.updateAvailableSP();
  }
  add(skillId: string) {
    if (this.availableSkills > 0) {
      let skill = this.skillTree[skillId];
      if (skill && skill.currentLevel < skill.maxLevel) {
        skill.currentLevel += 1;
        this.availableSkills -= 1;
        this.validateChildDependecies(skill);
      }
    }
  }
  remove(skillId: string) {
    let skill = this.skillTree[skillId];
    if (skill && skill.currentLevel > 0) {
      this.availableSkills += 1;
      skill.currentLevel -= 1;
      this.validateChildDependecies(skill);
    }
  }
  totalAvailableSkills(): number {
    return this.selectedLevel + this.selectedCoSP;
  }
  updateAvailableSP() {
    this.availableSkills =
      this.totalAvailableSkills() - this.skillTree.getUsedLevels();
  }
  simplifyModel(): CharacterMin {
    return new CharacterMin(
      this.id,
      this.skillTree.simplifyModel(),
      this.availableSkills,
      this.selectedLevel,
      this.selectedCoSP
    );
  }
  setMinData(minData: CharacterMin) {
    this.availableSkills = minData.a;
    this.selectedLevel = minData.l;
    this.selectedCoSP = minData.c;
    this.skillTree.setMinData(minData.s);
    Object.keys(this.skillTree).forEach((_) => {
      if (
        _ !== "skillTreeRows" &&
        _ !== "hlfSkillIds" &&
        _ !== "hlrSkillIds" &&
        _ !== "hllSkillIds" &&
        _ !== "vlfSkillIds" &&
        _ !== "vltSkillIds" &&
        _ !== "vlbSkillIds"
      ) {
        this.validateChildDependecies(this.skillTree[_]);
      }
    });
  }
  private validateChildDependecies(skill: Skill) {
    if (skill.children && skill.children.length > 0) {
      skill.children.forEach((_) => {
        let child = this.skillTree[_.id] as Skill;
        if (child) {
          if (skill.currentLevel >= _.prerequisite) {
            child.locked = false;
          } else {
            child.currentLevel = 0;
            child.locked = true;
            this.validateChildDependecies(child);
          }
        }
      });
    }
  }
}
