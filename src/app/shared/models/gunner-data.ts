import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class GunnerData {
  static setDependencies(skillTree: SkillTree) {}
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(11);

    GunnerData.setDependencies(skillTree);

    return skillTree;
  }
}
