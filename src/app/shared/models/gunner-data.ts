import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class GunnerData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "12", 3);
    skillTree.setDependency("1", "17", 3);
    skillTree.setDependency("1", "21", 1);
    skillTree.setDependency("1", "23", 3);
    skillTree.setDependency("1", "24", 3);
    skillTree.setDependency("1", "25", 3);
    skillTree.setDependency("1", "26", 3);
    skillTree.setDependency("1", "27", 3);
    skillTree.setDependency("8", "13", 3);
    skillTree.setDependency("11", "16", 1);
    skillTree.setDependency("25", "28", 2);
    skillTree.setDependency("25", "28", 2);
    skillTree.setDependency("26", "29", 3);
    skillTree.setDependency("26", "30", 5);
    skillTree.setDependency("27", "37", 5);
    skillTree.setDependency("27", "38", 3);
    skillTree.setDependency("27", "39", 5);
    skillTree.setDependency("27", "40", 3);
    skillTree.setDependency("28", "31", 3);
    skillTree.setDependency("28", "32", 3);
    skillTree.setDependency("29", "33", 5);
    skillTree.setDependency("34", "36", 2);
    skillTree.setDependency("36", "41", 2);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(11);
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

    GunnerData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        0,
        new Skill(
          "37",
          "Point Blank Boost 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        1,
        new Skill(
          "38",
          "Zero Range Critical",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        2,
        new Skill(
          "39",
          "Attack PP Restorate",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        3,
        new Skill(
          "40",
          "Perfectionist",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        5,
        new Skill(
          "41",
          "Stylish Roll Perf. Atk Bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        3,
        new Skill(
          "35",
          "High Time",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        5,
        new Skill(
          "36",
          "Stylish Roll Finisher",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "Encore Time",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        8,
        3,
        new Skill(
          "32",
          "Time Save",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        8,
        4,
        new Skill(
          "33",
          "Double Chain",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        8,
        5,
        new Skill(
          "34",
          "Stylish Roll Up",
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
          "27",
          "Point Blank Boost 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        7,
        3,
        new Skill(
          "28",
          "Showtime Star",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        4,
        new Skill(
          "29",
          "Chain Finish",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        7,
        5,
        new Skill(
          "30",
          "Chain Finisher Bonus",
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
          "Advanced Aerial",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        6,
        2,
        new Skill(
          "24",
          "Auto-Mate Deadline",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        6,
        3,
        new Skill(
          "25",
          "Showtime",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        6,
        4,
        new Skill(
          "26",
          "Chain Trigger",
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
          "21",
          "Twin Machine Guns Focus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        5,
        new Skill(
          "22",
          "Perfect Recovery",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill(
          "17",
          "Ranged PWR Up 3",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        4,
        2,
        new Skill("18", "HP Up", "/assets/icons/shared/cannot.png").setMaxLevel(
          10
        )
      )
      .setSkill(
        4,
        4,
        new Skill(
          "19",
          "Twin Mach. Guns Stylish Charge",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        4,
        5,
        new Skill(
          "20",
          "Dive Roll Shot",
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
          "12",
          "Ranged PWR Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        2,
        new Skill(
          "13",
          "Dexterity Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        3,
        new Skill(
          "14",
          "Ranged DEF Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        4,
        new Skill(
          "15",
          "Twin Machine Guns Mastery",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "16",
          "Advanced Dive Roll",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        2,
        new Skill(
          "8",
          "Dexterity Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        3,
        new Skill(
          "9",
          "Ranged DEF Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        4,
        new Skill(
          "10",
          "Arms Enthusiast: Gunner",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        5,
        new Skill(
          "11",
          "Dive Roll",
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
          "Ranged PWR Up 1",
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
          "Perf. Recovery & ATK Combo",
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
