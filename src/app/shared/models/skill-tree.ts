import { Skill } from "./skill";
import { SkillDependency } from "./skill-dependency";

export class SkillTree {
  skillTreeRows: string[][];

  constructor(rows: number) {
    this.skillTreeRows = [];
    for (let index = 0; index < rows; index++) {
      this.skillTreeRows.push([null, null, null, null, null, null]);
    }
  }
  setSkill(row: number, col: number, skill: Skill) {
    if (row < this.skillTreeRows.length && col < 6) {
      this.skillTreeRows[row][col] = skill.id;
      this[skill.id] = skill;
    }
    return this;
  }
  setDependency(parentId: string, childId: string, prerequisite: number) {
    if (this[parentId] && this[childId]) {
      this[childId].setParent(new SkillDependency(parentId, prerequisite));
      this[parentId].children.push(new SkillDependency(childId, prerequisite));
    }
  }
  simplifyModel() {
    let model = {};
    let keys = Object.keys(this);
    keys.forEach((key) => {
      if (key !== "skillTreeRows") {
        let skill = this[key] as Skill;
        if (skill.currentLevel > 1) model[key] = skill.simplifyModel();
      }
    });
    return model;
  }
  setMinData(minData: any) {
    let keys = Object.keys(minData);
    keys.forEach((key) => {
      this[key].setMinData(minData[key]);
    });
  }
}
