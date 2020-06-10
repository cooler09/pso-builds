import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class SummonerData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "11", 1);
    skillTree.setDependency("1", "12", 1);
    skillTree.setDependency("1", "14", 1);
    skillTree.setDependency("14", "15", 1);
    skillTree.setDependency("14", "16", 1);
    skillTree.setDependency("14", "17", 1);
    skillTree.setDependency("15", "18", 5);
    skillTree.setDependency("15", "19", 1);
    skillTree.setDependency("18", "20", 3);
    skillTree.setDependency("18", "21", 1);
    skillTree.setDependency("18", "22", 1);
    skillTree.setDependency("18", "23", 1);
    skillTree.setDependency("18", "24", 1);
    skillTree.setDependency("20", "25", 5);
    skillTree.setDependency("20", "26", 1);
    skillTree.setDependency("25", "27", 3);
    skillTree.setDependency("25", "28", 3);
    skillTree.setDependency("25", "29", 3);
    skillTree.setDependency("28", "30", 3);
    skillTree.setDependency("28", "31", 3);
    skillTree.setDependency("28", "32", 3);
    skillTree.setDependency("28", "33", 3);
    skillTree.setDependency("28", "34", 3);
    skillTree.setDependency("28", "35", 3);
    skillTree.setDependency("28", "39", 3);
    skillTree.setDependency("28", "40", 3);
    skillTree.setDependency("32", "36", 3);
    skillTree.setDependency("33", "37", 3);
    skillTree.setDependency("34", "38", 3);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(15);
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

    SummonerData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowFifteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        14,
        0,
        new Skill(
          "39",
          "Advanced Photon Blast",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        14,
        1,
        new Skill(
          "40",
          "Alter Ego",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowFourteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        13,
        1,
        new Skill(
          "35",
          "HP Mega-Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        13,
        2,
        new Skill(
          "36",
          "PP Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        13,
        3,
        new Skill(
          "37",
          "Total Attack Mega-Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        13,
        4,
        new Skill(
          "38",
          "Total Defense/Dexterity Mega-Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        12,
        2,
        new Skill(
          "32",
          "PP Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        12,
        3,
        new Skill(
          "33",
          "Total Attack Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        12,
        4,
        new Skill(
          "34",
          "Total Defense/Dexterity Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        1,
        new Skill(
          "30",
          "Pet Elemental Precision Hit",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        2,
        new Skill(
          "31",
          "Pet Elemental PP Restorate",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        0,
        new Skill(
          "28",
          "Pet Recovery",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        1,
        new Skill(
          "29",
          "Reserve Recovery",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      9,
      1,
      new Skill(
        "27",
        "Enhanced Mark",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(1)
    );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        0,
        new Skill(
          "25",
          "Summoner's Mark",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        8,
        1,
        new Skill(
          "26",
          "Pet Photon Barrier",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        7,
        0,
        new Skill(
          "20",
          "All Attack Bonus 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        1,
        new Skill(
          "21",
          "Harmonize Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        2,
        new Skill(
          "22",
          "Sympathy Time",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        3,
        new Skill(
          "23",
          "Easy Sympathy",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        7,
        4,
        new Skill(
          "24",
          "Love Distance Love",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        0,
        new Skill(
          "18",
          "Pet Sympathy",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        6,
        1,
        new Skill(
          "19",
          "Dia Master",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        0,
        new Skill(
          "15",
          "All Attack Bonus 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        5,
        1,
        new Skill(
          "16",
          "Quick Recovery",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        5,
        2,
        new Skill(
          "17",
          "Unstoppable Recovery",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      4,
      0,
      new Skill(
        "14",
        "HP Restorate",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(10)
    );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill(
          "11",
          "Pet Switch Strike",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        3,
        2,
        new Skill(
          "12",
          "Pet Switch Shot",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "13",
          "Perfect Recovery",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        3,
        new Skill(
          "8",
          "Assist Share",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        2,
        4,
        new Skill(
          "9",
          "Sub-Class Growth Up",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        5,
        new Skill(
          "10",
          "Blind Escape",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowTwo(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      1,
      5,
      new Skill(
        "7",
        "Sidestep & Perf. ATK Combo",
        "/assets/icons/shared/cannot.png"
      ).setSkillType(SkillType.Passive)
    );
  }
  static loadRowOne(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        0,
        0,
        new Skill("1", "HP Up", "/assets/icons/shared/cannot.png").setMaxLevel(
          5
        )
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/shared/cannot.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(10)
      )
      .setSkill(
        0,
        2,
        new Skill(
          "3",
          "First Arts Perfect Attack Addition",
          "/assets/icons/shared/cannot.png"
        )
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(20)
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/shared/cannot.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
      )
      .setSkill(
        0,
        4,
        new Skill(
          "5",
          "Perf. Recovery & ARK Combo",
          "/assets/icons/shared/cannot.png"
        )
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
      )
      .setSkill(
        0,
        5,
        new Skill("6", "Double Jump", "/assets/icons/shared/cannot.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(40)
      );
  }
}
