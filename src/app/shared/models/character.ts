import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";

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
          this.skillTree[skill].currentLevel = 0;
          this.validateChildDependecies(this.skillTree[skill]);
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
  updateAvailableSP() {
    this.availableSkills = this.selectedLevel + this.selectedCoSP;
  }
  private validateChildDependecies(skill: Skill) {
    if (skill.children && skill.children.length > 0) {
      skill.children.forEach((_) => {
        let child = this.skillTree[_.id];
        if (child) {
          if (skill.currentLevel >= _.prerequisite) {
            child.locked = false;
          } else {
            child.locked = true;
          }
        }
      });
    }
  }
}
