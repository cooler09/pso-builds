import { Skill } from "./skill";
import { SkillDependency } from "./skill-dependency";
import { SkillType } from "./skill-type";

export class SkillTree {
  skillTreeRows: string[][];
  hlfSkillIds: any;
  hlrSkillIds: any;
  hllSkillIds: any;
  vlfSkillIds: any;
  vltSkillIds: any;
  vlbSkillIds: any;

  constructor(rows: number) {
    this.skillTreeRows = [];
    this.hlfSkillIds = {};
    this.hllSkillIds = {};
    this.hlrSkillIds = {};
    this.vlfSkillIds = {};
    this.vltSkillIds = {};
    this.vlbSkillIds = {};
    for (let index = 0; index < rows; index++) {
      this.skillTreeRows.push([null, null, null, null, null, null]);
    }
  }
  getUsedLevels(): number {
    let totalLevelsUsed = 0;
    Object.values(this).forEach((_) => {
      if (
        _.currentLevel &&
        _.skillType !== SkillType.LevelReq &&
        _.skillType !== SkillType.Passive
      ) {
        totalLevelsUsed += _.currentLevel;
      }
    });
    return totalLevelsUsed;
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
      if (
        key !== "skillTreeRows" &&
        key !== "hlfSkillIds" &&
        key !== "hlrSkillIds" &&
        key !== "hllSkillIds" &&
        key !== "vlfSkillIds" &&
        key !== "vltSkillIds" &&
        key !== "vlbSkillIds"
      ) {
        let skill = this[key] as Skill;
        if (skill.currentLevel > 0) model[key] = skill.simplifyModel();
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
