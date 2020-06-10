import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class TechterData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "13", 3);
    skillTree.setDependency("1", "17", 1);
    skillTree.setDependency("1", "20", 1);
    skillTree.setDependency("1", "21", 3);
    skillTree.setDependency("1", "22", 3);
    skillTree.setDependency("1", "23", 3);
    skillTree.setDependency("1", "24", 3);
    skillTree.setDependency("1", "25", 3);
    skillTree.setDependency("1", "30", 1);
    skillTree.setDependency("1", "31", 3);
    skillTree.setDependency("1", "32", 3);
    skillTree.setDependency("1", "33", 3);
    skillTree.setDependency("1", "34", 5);
    skillTree.setDependency("1", "39", 3);
    skillTree.setDependency("1", "40", 3);
    skillTree.setDependency("1", "41", 3);
    skillTree.setDependency("1", "42", 3);
    skillTree.setDependency("22", "26", 3);
    skillTree.setDependency("22", "27", 3);
    skillTree.setDependency("24", "28", 3);
    skillTree.setDependency("24", "29", 3);
    skillTree.setDependency("30", "35", 3);
    skillTree.setDependency("30", "36", 1);
    skillTree.setDependency("32", "37", 1);
    skillTree.setDependency("39", "43", 2);
    skillTree.setDependency("39", "44", 3);
    skillTree.setDependency("40", "45", 2);
    skillTree.setDependency("40", "46", 3);
    skillTree.setDependency("41", "47", 3);
    skillTree.setDependency("41", "48", 2);
    skillTree.setDependency("41", "49", 5);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(14);
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

    TechterData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowFourteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        13,
        4,
        new Skill(
          "48",
          "Dark Mastery 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        13,
        5,
        new Skill(
          "49",
          "Poison Detonation",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        12,
        0,
        new Skill(
          "43",
          "Wind Mastery 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        12,
        1,
        new Skill(
          "44",
          "Blind Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        12,
        2,
        new Skill(
          "45",
          "Light Mastery 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        12,
        3,
        new Skill(
          "46",
          "Panic Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        12,
        5,
        new Skill(
          "47",
          "Poison Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        0,
        new Skill(
          "39",
          "Wind Mastery 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        11,
        3,
        new Skill(
          "40",
          "Light Mastery 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        11,
        4,
        new Skill(
          "41",
          "Dark Mastery 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        11,
        5,
        new Skill(
          "42",
          "Elemental Percision Hit",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      10,
      3,
      new Skill(
        "38",
        "Territory PP Save",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(5)
    );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        1,
        new Skill(
          "35",
          "Wand Reactor",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        9,
        2,
        new Skill(
          "36",
          "Wand Focus Element",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        9,
        3,
        new Skill(
          "37",
          "Support Range Extender",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        1,
        new Skill(
          "30",
          "Wand Lovers",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "PP Converstion",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        8,
        3,
        new Skill(
          "32",
          "Territory Burst",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        8,
        4,
        new Skill(
          "33",
          "Super Treatment",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        8,
        5,
        new Skill(
          "34",
          "Reverser Field",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        7,
        2,
        new Skill(
          "26",
          "Critical Shifta",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        3,
        new Skill(
          "27",
          "Shifta Strike",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        4,
        new Skill(
          "28",
          "Deband Cut",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        5,
        new Skill(
          "29",
          "Deband Toughness",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill(
          "21",
          "PP Restorate",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        6,
        2,
        new Skill(
          "22",
          "Advanced Shifta",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        6,
        3,
        new Skill(
          "23",
          "Advanced Resta",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        6,
        4,
        new Skill(
          "24",
          "Advanced Deband",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        6,
        5,
        new Skill(
          "25",
          "Reverse Bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      5,
      1,
      new Skill(
        "20",
        "Wand Focus",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(1)
    );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill(
          "17",
          "Melee Power Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        4,
        3,
        new Skill(
          "18",
          "Longarm Assist",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        4,
        5,
        new Skill(
          "19",
          "Tech Charge JA Addition",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill(
          "13",
          "Tech. Power Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        2,
        new Skill(
          "14",
          "PP Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        3,
        new Skill(
          "15",
          "Extend Assist",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "16",
          "Perfect Recovery",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        1,
        new Skill(
          "8",
          "Dexterity Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        2,
        new Skill(
          "9",
          "PP Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        3,
        new Skill(
          "10",
          "Technique DEF Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        4,
        new Skill(
          "11",
          "Arms Enthusiast: Techter",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        5,
        new Skill(
          "12",
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
        new Skill(
          "1",
          "Tech. Power Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
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
