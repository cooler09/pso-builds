import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class BraverData {
  static setDependencies(skillTree: SkillTree) {
    // skillTree.setDependency("1", "11", 3);
    // skillTree.setDependency("1", "14", 3);
    // skillTree.setDependency("1", "15", 3);
    // skillTree.setDependency("1", "18", 1);
    // skillTree.setDependency("1", "19", 3);
    // skillTree.setDependency("1", "20", 3);
    // skillTree.setDependency("1", "25", 3);
    // skillTree.setDependency("10", "12", 1);
    // skillTree.setDependency("10", "13", 1);
    // skillTree.setDependency("16", "21", 1);
    // skillTree.setDependency("18", "22", 1);
    // skillTree.setDependency("18", "23", 1);
    // skillTree.setDependency("22", "24", 1);
    // skillTree.setDependency("24", "26", 3);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(13);
    skillTree = this.loadRowOne(skillTree);
    skillTree = this.loadRowTwo(skillTree);
    skillTree = this.loadRowThree(skillTree);
    skillTree = this.loadRowFour(skillTree);
    skillTree = this.loadRowFive(skillTree);
    skillTree = this.loadRowSix(skillTree);
    skillTree = this.loadRowSeven(skillTree);
    skillTree = this.loadRowEight(skillTree);
    skillTree = this.loadRowNine(skillTree);
    skillTree = this.loadRowTen(skillTree);
    skillTree = this.loadRowEleven(skillTree);
    skillTree = this.loadRowTwelve(skillTree);

    BraverData.setDependencies(skillTree);

    return skillTree;
  }

  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowTwo(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowOne(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
}
