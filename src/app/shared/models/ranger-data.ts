import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class RangerData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "12", 3);
    skillTree.setDependency("1", "21", 1);
    skillTree.setDependency("1", "22", 1);
    skillTree.setDependency("1", "23", 1);
    skillTree.setDependency("1", "24", 1);
    skillTree.setDependency("1", "25", 1);
    skillTree.setDependency("1", "29", 3);
    skillTree.setDependency("1", "30", 3);
    skillTree.setDependency("1", "31", 3);
    skillTree.setDependency("8", "13", 3);
    skillTree.setDependency("18", "19", 1);
    skillTree.setDependency("23", "26", 1);
    skillTree.setDependency("24", "27", 1);
    skillTree.setDependency("25", "28", 1);
    skillTree.setDependency("29", "32", 5);
    skillTree.setDependency("29", "33", 3);
    skillTree.setDependency("29", "34", 3);
    skillTree.setDependency("29", "35", 3);
    skillTree.setDependency("29", "36", 3);
    skillTree.setDependency("29", "37", 3);
    skillTree.setDependency("29", "38", 3);
    skillTree.setDependency("29", "39", 3);
    skillTree.setDependency("29", "40", 3);
    skillTree.setDependency("29", "41", 3);
    skillTree.setDependency("29", "42", 3);
    skillTree.setDependency("37", "43", 2);
    skillTree.setDependency("38", "44", 5);
    skillTree.setDependency("40", "45", 3);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(12);
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

    RangerData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        0,
        new Skill(
          "43",
          "Precision Hit Blast Bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        1,
        new Skill(
          "44",
          "Stationary Fire 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        3,
        new Skill(
          "45",
          "PP Preservation Bullet",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        0,
        new Skill(
          "37",
          "Advanced Precision Hit 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        1,
        new Skill(
          "38",
          "Stationary Fire 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        2,
        new Skill(
          "39",
          "Mobile Fire",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        3,
        new Skill(
          "40",
          "Power Bullet",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        4,
        new Skill(
          "41",
          "Ammo Maintenance",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        10,
        5,
        new Skill(
          "42",
          "Massive Bullet",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        1,
        new Skill(
          "32",
          "Blight Rounds",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        9,
        2,
        new Skill(
          "33",
          "Bind Bullet",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        3,
        new Skill(
          "34",
          "Blinding Shot",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        4,
        new Skill(
          "35",
          "Panic Shot",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        5,
        new Skill(
          "36",
          "Jellen Shot",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        0,
        new Skill(
          "29",
          "Advanced Precision Hit 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        8,
        1,
        new Skill(
          "30",
          "First Hit",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "Eradication Bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        7,
        3,
        new Skill(
          "26",
          "Custom Spring Trap",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        7,
        4,
        new Skill(
          "27",
          "Custom Poison Trap",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        7,
        5,
        new Skill(
          "28",
          "Tactical Trap",
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
          "Stun Grenade",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        2,
        new Skill(
          "22",
          "Gravity Bomb",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        3,
        new Skill(
          "23",
          "Spring Trap",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        4,
        new Skill(
          "24",
          "Poison Trap",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        5,
        new Skill(
          "25",
          "Tool Mastery",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        4,
        new Skill(
          "19",
          "Keep Roll Shot",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        5,
        new Skill(
          "20",
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
          "Dexterity Up 3",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        4,
        5,
        new Skill(
          "18",
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
          "Dexterity Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        2,
        new Skill(
          "13",
          "Ranged PWR Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        3,
        new Skill(
          "14",
          "Trap Search",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        3,
        4,
        new Skill(
          "15",
          "Sharp Shooter",
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
          "Ranged PWR Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        3,
        new Skill(
          "9",
          "Ranged DEF Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        4,
        new Skill(
          "10",
          "Arms Enthusiast: Ranger",
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
          "Dexterity Up 1",
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
