import { Skill } from "./skill";

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
}
