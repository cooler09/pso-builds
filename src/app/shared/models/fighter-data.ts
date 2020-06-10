import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class FighterData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "13", 3);
    skillTree.setDependency("1", "16", 3);
    skillTree.setDependency("1", "20", 1);
    skillTree.setDependency("1", "21", 1);
    skillTree.setDependency("1", "22", 1);
    skillTree.setDependency("1", "26", 3);
    skillTree.setDependency("1", "27", 3);
    skillTree.setDependency("1", "28", 2);
    skillTree.setDependency("1", "29", 3);
    skillTree.setDependency("1", "35", 3);
    skillTree.setDependency("1", "36", 3);
    skillTree.setDependency("1", "37", 3);
    skillTree.setDependency("1", "38", 3);
    skillTree.setDependency("1", "39", 5);
    skillTree.setDependency("12", "15", 1);
    skillTree.setDependency("20", "23", 1);
    skillTree.setDependency("21", "24", 1);
    skillTree.setDependency("22", "25", 1);
    skillTree.setDependency("26", "30", 5);
    skillTree.setDependency("26", "31", 3);
    skillTree.setDependency("27", "32", 5);
    skillTree.setDependency("27", "33", 3);
    skillTree.setDependency("29", "34", 3);
    skillTree.setDependency("35", "40", 3);
    skillTree.setDependency("35", "41", 5);
    skillTree.setDependency("37", "42", 3);
    skillTree.setDependency("38", "43", 2);
    skillTree.setDependency("38", "44", 4);
    skillTree.setDependency("39", "45", 3);
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

    FighterData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        0,
        new Skill(
          "40",
          "Extra Chaser Damage",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        1,
        new Skill(
          "41",
          "Chaser Bind",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        2,
        new Skill(
          "42",
          "Photon Slayer",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        10,
        3,
        new Skill(
          "43",
          "Crazy Heart",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        4,
        new Skill(
          "44",
          "Crazy Beat",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        5,
        new Skill(
          "45",
          "Overload Photon Charge",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        0,
        new Skill(
          "35",
          "Chaser Damage",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        9,
        1,
        new Skill(
          "36",
          "Halfline Boost",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        2,
        new Skill(
          "37",
          "Deadline Slayer",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        9,
        3,
        new Skill(
          "38",
          "Halfline Slayer",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        9,
        5,
        new Skill(
          "39",
          "Overload",
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
          "30",
          "Valiant Stance Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "Valiant Critical",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        3,
        new Skill(
          "32",
          "Wise Stance Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        4,
        new Skill(
          "33",
          "Wise Critical",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        5,
        new Skill(
          "34",
          "Combo Var. P. Attack PP Save",
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
          "26",
          "Valiant Stance",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        7,
        3,
        new Skill(
          "27",
          "Wise Stance",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        7,
        4,
        new Skill(
          "28",
          "Adrenaline",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        7,
        5,
        new Skill(
          "29",
          "Tech Arts Perfect Attack Bonus",
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
          "23",
          "Double Saber Wind Parry",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        2,
        new Skill(
          "24",
          "Twin Daggers Somersault",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        3,
        new Skill(
          "25",
          "Knuckles Focus Boost",
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
          "20",
          "Double Saber Focus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        2,
        new Skill(
          "21",
          "Twin Daggers Focus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        3,
        new Skill(
          "22",
          "Knuckles Focus",
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
          "16",
          "Melee Power Up 3",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        4,
        3,
        new Skill(
          "17",
          "Critical Strike",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        4,
        4,
        new Skill(
          "18",
          "Perfect Recovery",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        4,
        5,
        new Skill(
          "19",
          "Sidestep Strike",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill(
          "13",
          "Melee Power Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        2,
        new Skill(
          "14",
          "HP Up 2",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "15",
          "Sidestep Plus",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
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
          "HP Up 1",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        3,
        new Skill(
          "10",
          "Arms Enthusiast: Fighter",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        4,
        new Skill(
          "11",
          "Melee Defense Up",
          "/assets/icons/shared/cannot.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        2,
        5,
        new Skill(
          "12",
          "Sidestep",
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
          "Melee Power Up 1",
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
