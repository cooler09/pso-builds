import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class BouncerData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "10", 3);
    skillTree.setDependency("1", "11", 3);
    skillTree.setDependency("1", "14", 3);
    skillTree.setDependency("1", "15", 1);
    skillTree.setDependency("1", "16", 3);
    skillTree.setDependency("1", "17", 3);
    skillTree.setDependency("1", "18", 1);
    skillTree.setDependency("1", "21", 3);
    skillTree.setDependency("1", "22", 3);
    skillTree.setDependency("1", "23", 3);
    skillTree.setDependency("1", "26", 3);
    skillTree.setDependency("1", "27", 3);
    skillTree.setDependency("1", "28", 3);
    skillTree.setDependency("1", "30", 3);
    skillTree.setDependency("1", "31", 3);
    skillTree.setDependency("1", "32", 3);
    skillTree.setDependency("1", "33", 3);
    skillTree.setDependency("1", "34", 3);
    skillTree.setDependency("1", "37", 3);
    skillTree.setDependency("1", "38", 3);
    skillTree.setDependency("9", "13", 1);
    skillTree.setDependency("10", "14", 3);
    skillTree.setDependency("15", "20", 1);
    skillTree.setDependency("24", "25", 1);
    skillTree.setDependency("28", "29", 5);
    skillTree.setDependency("30", "35", 3);
    skillTree.setDependency("33", "36", 3);
    skillTree.setDependency("37", "39", 5);
    skillTree.setDependency("37", "40", 3);
    skillTree.setDependency("38", "41", 1);
    skillTree.setDependency("38", "42", 5);
    skillTree.setDependency("38", "43", 3);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(16);
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

    BouncerData.setDependencies(skillTree);

    return skillTree;
  }

  static loadRowSixteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        15,
        2,
        new Skill(
          "42",
          "Break Stance Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        15,
        3,
        new Skill(
          "43",
          "Break Stance Critical",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowFifteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        14,
        0,
        new Skill(
          "39",
          "Elemental Stance Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        14,
        1,
        new Skill(
          "40",
          "Elemental Stance Critical",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        14,
        3,
        new Skill(
          "41",
          "Break Stance D bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowFourteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        13,
        0,
        new Skill(
          "37",
          "Elemental Stance",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        13,
        2,
        new Skill(
          "38",
          "Break Stance",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        12,
        1,
        new Skill(
          "35",
          "Rapid Boost JA Bonus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        12,
        4,
        new Skill(
          "36",
          "Photon Blades Fever Up",
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
          "Rapid Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        2,
        new Skill(
          "31",
          "Elemental Burst",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        3,
        new Skill(
          "32",
          "Switch Strike",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        11,
        4,
        new Skill(
          "33",
          "Photon Blades Fever",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        5,
        new Skill(
          "34",
          "Photon Blades Escape",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      10,
      4,
      new Skill(
        "29",
        "Healing Bonus",
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
          "26",
          "Shifta Air Attack Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        3,
        new Skill(
          "27",
          "Deband Attack PP Restorate",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        4,
        new Skill(
          "28",
          "Heal Sharing",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      8,
      5,
      new Skill(
        "25",
        "Perfect Recovery PP Gain",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(5)
    );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        7,
        1,
        new Skill(
          "21",
          "Elemental PP Restorate Field",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        2,
        new Skill(
          "22",
          "Critical Field",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        7,
        4,
        new Skill(
          "23",
          "Field Remain",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        7,
        5,
        new Skill(
          "24",
          "Perfect Recovery",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      6,
      1,
      new Skill(
        "20",
        "Jet Boots Focus Boost",
        "/assets/icons/shared/cannot.png"
      ).setMaxLevel(1)
    );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        1,
        new Skill(
          "15",
          "Jet Boots Focus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        2,
        new Skill(
          "16",
          "Jet Boots Escape",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        5,
        3,
        new Skill(
          "17",
          "Encore Jump",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        4,
        new Skill(
          "18",
          "Soaring Blades Focus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        5,
        new Skill(
          "19",
          "Dodge Attack",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      4,
      1,
      new Skill(
        "14",
        "Melee Power Up 2",
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
          "10",
          "Melee Power Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        2,
        new Skill(
          "11",
          "Tech. Power Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        4,
        new Skill(
          "12",
          "Bouncer Mag",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "13",
          "Advanced Dodge",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        4,
        new Skill(
          "8",
          "Arms Enthusiast: Bouncer",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        5,
        new Skill(
          "9",
          "Binding Sidestep",
          "/assets/icons/shared/sidestep.png"
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
        "/assets/icons/shared/sidestep_alt.png"
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
          "Dexterity Up",
          "/assets/icons/shared/dex.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/shared/sidestep_alt.png")
          .setDesc("Jumping during a Dodge Action transitions you into a dash.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(10)
      )
      .setSkill(
        0,
        2,
        new Skill(
          "3",
          "First Arts Perfect Attack Addition",
          "/assets/icons/shared/first_arts_atk.png"
        )
          .setDesc(
            "Turns your first attack into a Perfect Attack. A cooldown is applied after activation. Doesn't affect Harmonizer attacks, pet attacks, or Techniques."
          )
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(20)
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/shared/double_jump.png")
          .setDesc("Allows you to perform a break-fall while in the air.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
      )
      .setSkill(
        0,
        4,
        new Skill(
          "5",
          "Perf. Recovery & ATK Combo",
          "/assets/icons/shared/double_jump.png"
        )
          .setDesc(
            "Makes Perfect-Attack timing apply after a Perfect Recovery."
          )
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
      )
      .setSkill(
        0,
        5,
        new Skill("6", "Double Jump", "/assets/icons/shared/double_jump.png")
          .setDesc("Enables two-stage jumping.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(40)
      );
  }
}
