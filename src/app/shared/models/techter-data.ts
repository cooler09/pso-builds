import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class TechterData {
  static setDependencies(skillTree: SkillTree) {}
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(11);

    TechterData.setDependencies(skillTree);

    return skillTree;
  }
}
