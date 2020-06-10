import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class ForceData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "13", 2);
    skillTree.setDependency("1", "20", 3);
    skillTree.setDependency("1", "23", 3);
    skillTree.setDependency("1", "24", 3);
    skillTree.setDependency("1", "25", 3);
    skillTree.setDependency("1", "26", 3);
    skillTree.setDependency("1", "30", 2);
    skillTree.setDependency("1", "34", 3);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(17);
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
    skillTree = this.loadRowThirteen(skillTree);
    skillTree = this.loadRowFourteen(skillTree);
    skillTree = this.loadRowFifteen(skillTree);
    skillTree = this.loadRowSixteen(skillTree);
    skillTree = this.loadRowSeventeen(skillTree);

    ForceData.setDependencies(skillTree);

    return skillTree;
  }

  static loadRowSeventeen(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowSixteen(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowFifteen(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowFourteen(skillTree: SkillTree): SkillTree {
    return skillTree;
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
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
