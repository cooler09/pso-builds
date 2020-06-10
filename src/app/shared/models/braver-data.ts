import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillType } from "./skill-type";

export default class BraverData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "11", 3);
    skillTree.setDependency("1", "14", 3);
    skillTree.setDependency("1", "15", 3);
    skillTree.setDependency("1", "18", 1);
    skillTree.setDependency("1", "19", 3);
    skillTree.setDependency("1", "20", 3);
    skillTree.setDependency("1", "25", 3);
    skillTree.setDependency("1", "26", 3);
    skillTree.setDependency("1", "27", 3);
    skillTree.setDependency("1", "28", 3);
    skillTree.setDependency("1", "29", 3);
    skillTree.setDependency("18", "22", 1);
    skillTree.setDependency("18", "23", 1);
    skillTree.setDependency("22", "24", 1);
    skillTree.setDependency("25", "30", 5);
    skillTree.setDependency("26", "31", 3);
    skillTree.setDependency("26", "32", 3);
    skillTree.setDependency("27", "33", 5);
    skillTree.setDependency("28", "38", 3);
    skillTree.setDependency("28", "39", 3);
    skillTree.setDependency("29", "34", 3);
    skillTree.setDependency("30", "40", 3);
    skillTree.setDependency("30", "41", 3);
    skillTree.setDependency("31", "35", 3);
    skillTree.setDependency("33", "36", 3);
    skillTree.setDependency("33", "37", 3);
    skillTree.setDependency("38", "42", 3);
    skillTree.setDependency("39", "43", 3);
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

    BraverData.setDependencies(skillTree);

    return skillTree;
  }

  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        0,
        new Skill(
          "40",
          "Basic Stance Charge",
          "/assets/icons/shared/melee.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        11,
        1,
        new Skill(
          "41",
          "Basic Stance Critical",
          "/assets/icons/shared/melee.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        4,
        new Skill(
          "42",
          "Rapid Fire Up 2",
          "/assets/icons/braver/rapid_fire_up.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        11,
        5,
        new Skill(
          "43",
          "Advanced Rapid Fire",
          "/assets/icons/braver/rapid_fire_up.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        1,
        new Skill(
          "35",
          "Combat Escape",
          "/assets/icons/shared/sidestep_alt.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        10,
        2,
        new Skill(
          "36",
          "Precision Stance Critical",
          "/assets/icons/braver/precision_stance_alt.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        3,
        new Skill(
          "37",
          "Precision Stance Charge",
          "/assets/icons/braver/precision_stance_alt.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        10,
        4,
        new Skill(
          "38",
          "Rapid Fire Up 1",
          "/assets/icons/braver/rapid_fire_up.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        10,
        5,
        new Skill(
          "39",
          "Rapid Fire Mastery",
          "/assets/icons/braver/rapid_fire_up.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        0,
        new Skill(
          "30",
          "Basic Stance Up",
          "/assets/icons/shared/melee.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        1,
        new Skill(
          "31",
          "Combat P. Attack Bonus",
          "/assets/icons/braver/combat_p_atk_bonus.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        2,
        new Skill(
          "32",
          "Combat Finish",
          "/assets/icons/braver/combat_p_atk_bonus.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        3,
        new Skill(
          "33",
          "Percision Stance Up",
          "/assets/icons/braver/precision_stance_alt.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        9,
        5,
        new Skill(
          "34",
          "Bow Charge Bonus",
          "/assets/icons/braver/bow_charge_bonus.png"
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
          "Basic Stance",
          "/assets/icons/shared/melee.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        8,
        1,
        new Skill(
          "26",
          "Katana Combat",
          "/assets/icons/braver/katana_combat.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        3,
        new Skill(
          "27",
          "Precision Stance",
          "/assets/icons/braver/precision_stance.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        8,
        4,
        new Skill(
          "28",
          "Rapid Fire",
          "/assets/icons/braver/rapid_fire.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        8,
        5,
        new Skill(
          "29",
          "Charged Shot",
          "/assets/icons/braver/charged_shot.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      7,
      1,
      new Skill(
        "24",
        "Counter Bonus",
        "/assets/icons/braver/counter_bonus.png"
      ).setMaxLevel(1)
    );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill(
          "22",
          "Counter Edge",
          "/assets/icons/braver/counter_edge.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        6,
        2,
        new Skill(
          "23",
          "Katana Focus Boost",
          "/assets/icons/braver/katana_focus.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        1,
        new Skill(
          "18",
          "Katana Focus",
          "/assets/icons/braver/katana.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        2,
        new Skill(
          "19",
          "Enhanced Attack",
          "/assets/icons/shared/melee.png"
        ).setMaxLevel(5)
      )
      .setSkill(
        5,
        3,
        new Skill(
          "20",
          "Quick Mate",
          "/assets/icons/braver/quick_mate.png"
        ).setMaxLevel(1)
      )
      .setSkill(
        5,
        4,
        new Skill(
          "21",
          "Perfect Recovery Heal",
          "/assets/icons/braver/heal_recovery.png"
        ).setMaxLevel(5)
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill(
          "14",
          "Melee Power Up",
          "/assets/icons/shared/melee.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        4,
        2,
        new Skill(
          "15",
          "Ranged Power Up",
          "/assets/icons/braver/ranged.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        4,
        4,
        new Skill(
          "16",
          "Perfect Recovery",
          "/assets/icons/shared/sidestep_alt.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        4,
        5,
        new Skill(
          "17",
          "Sidestep Tackle",
          "/assets/icons/shared/sidestep_alt.png"
        ).setMaxLevel(1)
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill(
          "11",
          "Dexterity Up 2",
          "/assets/icons/shared/dex.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        3,
        4,
        new Skill(
          "12",
          "Dodge Attack",
          "/assets/icons/shared/sidestep_alt.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        3,
        5,
        new Skill(
          "13",
          "Advanced Dodge",
          "/assets/icons/shared/sidestep_alt.png"
        ).setMaxLevel(10)
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        3,
        new Skill(
          "8",
          "Arms Enthusiast: Braver",
          "/assets/icons/shared/arms_enthusiast.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        4,
        new Skill(
          "9",
          "Braver Mag",
          "/assets/icons/shared/mag.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        5,
        new Skill(
          "10",
          "Dodge",
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
          "Dexterity Up 1",
          "/assets/icons/shared/dex.png"
        ).setMaxLevel(10)
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/shared/sidestep_alt.png")
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
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(20)
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/shared/double_jump.png")
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
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
      )
      .setSkill(
        0,
        5,
        new Skill("6", "Double Jump", "/assets/icons/shared/double_jump.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(40)
      );
  }
}
