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
    skillTree.setDependency("1", "28", 1);
    skillTree.setDependency("1", "29", 1);
    skillTree.setDependency("1", "30", 2);
    skillTree.setDependency("1", "34", 3);
    skillTree.setDependency("1", "35", 3);
    skillTree.setDependency("1", "36", 3);
    skillTree.setDependency("24", "27", 1);
    skillTree.setDependency("30", "31", 3);
    skillTree.setDependency("30", "32", 2);
    skillTree.setDependency("31", "33", 1);
    skillTree.setDependency("34", "37", 5);
    skillTree.setDependency("34", "40", 2);
    skillTree.setDependency("34", "41", 3);
    skillTree.setDependency("35", "38", 2);
    skillTree.setDependency("35", "42", 3);
    skillTree.setDependency("35", "45", 2);
    skillTree.setDependency("35", "46", 5);
    skillTree.setDependency("36", "39", 5);
    skillTree.setDependency("36", "43", 2);
    skillTree.setDependency("36", "44", 3);
    skillTree.setDependency("46", "47", 2);
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
    return skillTree.setSkill(
      16,
      3,
      new Skill(
        "47",
        "F Detonation Boost",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(5)
    );
  }
  static loadRowSixteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        15,
        2,
        new Skill(
          "45",
          "Freeze Mastery 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        15,
        3,
        new Skill(
          "46",
          "Frozen Detonation",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowFifteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        14,
        0,
        new Skill(
          "40",
          "Flame Mastery 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        14,
        1,
        new Skill(
          "41",
          "Burn Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        14,
        3,
        new Skill(
          "42",
          "Freeze Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        14,
        4,
        new Skill(
          "43",
          "Lightning Mastery 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        14,
        5,
        new Skill(
          "44",
          "Shock Boost",
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
          "37",
          "Flame Tech Short Charge",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        13,
        3,
        new Skill(
          "38",
          "Deep Freeze",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        13,
        5,
        new Skill(
          "39",
          "Lightning Tech PP Preservation",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        12,
        0,
        new Skill(
          "34",
          "Flame Mastery 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        12,
        2,
        new Skill(
          "35",
          "Freeze Mastery 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        12,
        4,
        new Skill(
          "36",
          "Lightning Mastery 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      11,
      1,
      new Skill(
        "33",
        "Photo Flare Boost",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(10)
    );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        1,
        new Skill(
          "31",
          "Advanced Photon Flare",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        2,
        new Skill(
          "32",
          "Photon Flare Afterburst",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      9,
      1,
      new Skill(
        "30",
        "Photon Flare",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(10)
    );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        1,
        new Skill(
          "28",
          "Advanced Tech Charge 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        8,
        2,
        new Skill(
          "29",
          "Advanced Tech Charge 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      7,
      2,
      new Skill(
        "27",
        "Rod Preservation Bonus",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(1)
    );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill(
          "23",
          "Advanced Normal Tech",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        6,
        2,
        new Skill(
          "24",
          "Charged Escape",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        3,
        new Skill(
          "25",
          "Charged PP Revival",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        4,
        new Skill(
          "26",
          "Advanced Tech. Perfect Attacks",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        1,
        new Skill(
          "20",
          "Technique Power Mega-Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        5,
        4,
        new Skill(
          "21",
          "Element Conversion",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        5,
        5,
        new Skill(
          "22",
          "Tech Charge JA Addition",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        4,
        new Skill(
          "18",
          "Talis Fast Throw",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        4,
        5,
        new Skill(
          "19",
          "Photon Bullet",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
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
        new Skill("15", "HP Up", "/assets/icons/shared/cannot.png").setMaxLevel(
          10
        )
      )
      .setSkill(
        3,
        4,
        new Skill(
          "16",
          "Talis Tech Bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "17",
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
          "Arms Enthusiast: Force",
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
