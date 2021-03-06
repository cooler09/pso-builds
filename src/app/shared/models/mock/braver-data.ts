import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

export default class BraverData {
  static loadSkillLines(skillTree: SkillTree) {
    skillTree.vlbSkillIds["0-0"] = true;
    skillTree.vlfSkillIds["1-0"] = true;
    skillTree.vlfSkillIds["2-0"] = true;
    skillTree.vlbSkillIds["2-5"] = true;
    skillTree.hlrSkillIds["3-0"] = true;
    skillTree.vlfSkillIds["3-0"] = true;
    skillTree.hllSkillIds["3-1"] = true;
    skillTree.vltSkillIds["3-1"] = true;
    skillTree.hlrSkillIds["3-4"] = true;
    skillTree.vltSkillIds["3-4"] = true;
    skillTree.hllSkillIds["3-5"] = true;
    skillTree.vltSkillIds["3-5"] = true;
    skillTree.vlfSkillIds["4-0"] = true;
    skillTree.hlrSkillIds["4-0"] = true;
    skillTree.hlfSkillIds["4-1"] = true;
    skillTree.vltSkillIds["4-1"] = true;
    skillTree.hllSkillIds["4-2"] = true;
    skillTree.vltSkillIds["4-2"] = true;
    skillTree.vlbSkillIds["4-4"] = true;
    skillTree.vlfSkillIds["5-0"] = true;
    skillTree.hlrSkillIds["5-0"] = true;
    skillTree.hlfSkillIds["5-1"] = true;
    skillTree.vlfSkillIds["5-1"] = true;
    skillTree.hlfSkillIds["5-2"] = true;
    skillTree.vltSkillIds["5-2"] = true;
    skillTree.hllSkillIds["5-3"] = true;
    skillTree.vltSkillIds["5-3"] = true;
    skillTree.vltSkillIds["5-4"] = true;
    skillTree.vlfSkillIds["6-0"] = true;
    skillTree.vlfSkillIds["6-1"] = true;
    skillTree.hlrSkillIds["6-1"] = true;
    skillTree.vltSkillIds["6-2"] = true;
    skillTree.hllSkillIds["6-2"] = true;
    skillTree.vlfSkillIds["7-0"] = true;
    skillTree.vltSkillIds["7-1"] = true;
    skillTree.vlfSkillIds["8-0"] = true;
    skillTree.hlrSkillIds["8-0"] = true;
    skillTree.hlfSkillIds["8-1"] = true;
    skillTree.vlfSkillIds["8-1"] = true;
    skillTree.hlfSkillIds["8-2"] = true;
    skillTree.hlfSkillIds["8-3"] = true;
    skillTree.vlfSkillIds["8-3"] = true;
    skillTree.hlfSkillIds["8-4"] = true;
    skillTree.vlfSkillIds["8-4"] = true;
    skillTree.hllSkillIds["8-5"] = true;
    skillTree.vlfSkillIds["8-5"] = true;
    skillTree.vlfSkillIds["9-0"] = true;
    skillTree.vlfSkillIds["9-1"] = true;
    skillTree.hlrSkillIds["9-1"] = true;
    skillTree.hllSkillIds["9-2"] = true;
    skillTree.vltSkillIds["9-2"] = true;
    skillTree.vlfSkillIds["9-3"] = true;
    skillTree.vlfSkillIds["9-4"] = true;
    skillTree.vltSkillIds["9-5"] = true;
    skillTree.vlfSkillIds["10-0"] = true;
    skillTree.vltSkillIds["10-1"] = true;
    skillTree.vltSkillIds["10-2"] = true;
    skillTree.hlrSkillIds["10-2"] = true;
    skillTree.hllSkillIds["10-3"] = true;
    skillTree.vltSkillIds["10-3"] = true;
    skillTree.vlfSkillIds["10-4"] = true;
    skillTree.hlrSkillIds["10-4"] = true;
    skillTree.hllSkillIds["10-5"] = true;
    skillTree.vlfSkillIds["10-5"] = true;
    skillTree.vltSkillIds["11-0"] = true;
    skillTree.hlrSkillIds["11-0"] = true;
    skillTree.hllSkillIds["11-1"] = true;
    skillTree.vltSkillIds["11-1"] = true;
    skillTree.vltSkillIds["11-4"] = true;
    skillTree.vltSkillIds["11-5"] = true;
  }
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
    this.loadSkillLines(skillTree);
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
        new Skill("40", "Basic Stance Charge", "/assets/icons/shared/melee.png")
          .setMaxLevel(1)
          .setDesc(
            "Boosts the damage of charged attacks performed while in a Basic Stance."
          )
      )
      .setSkill(
        11,
        1,
        new Skill(
          "41",
          "Basic Stance Critical",
          "/assets/icons/shared/melee.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts your critical hit rate while in a Basic Stance.")
      )
      .setSkill(
        11,
        4,
        new Skill(
          "42",
          "Rapid Fire Up 2",
          "/assets/icons/braver/rapid_fire_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your Ranged Power when a Bow is equipped while in Rapid Fire mode. Produces a stronger effect than Rapid Fire Up 1."
          )
      )
      .setSkill(
        11,
        5,
        new Skill(
          "43",
          "Advanced Rapid Fire",
          "/assets/icons/braver/rapid_fire_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Reduces the cooldown period for Rapid Fire and boosts PP recovery induced by performing a Normal Attack while in Rapid Fire mode."
          )
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
        )
          .setMaxLevel(1)
          .setDesc(
            "Triggers a period of invulnerability when you initiate Katana Combat. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        10,
        2,
        new Skill(
          "36",
          "Precision Stance Critical",
          "/assets/icons/braver/precision_stance_alt.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts the critical hit rate of attacks that are effective while in a Precision Stance."
          )
      )
      .setSkill(
        10,
        3,
        new Skill(
          "37",
          "Precision Stance Charge",
          "/assets/icons/braver/precision_stance_alt.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Grants a damage bonus to effective charged attacks performed during Precision Stance."
          )
      )
      .setSkill(
        10,
        4,
        new Skill(
          "38",
          "Rapid Fire Up 1",
          "/assets/icons/braver/rapid_fire_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your Ranged Power when a Bow is equipped while in Rapid Fire mode."
          )
      )
      .setSkill(
        10,
        5,
        new Skill(
          "39",
          "Rapid Fire Mastery",
          "/assets/icons/braver/rapid_fire_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus when a Bow is equipped during Rapid Fire."
          )
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        0,
        new Skill("30", "Basic Stance Up", "/assets/icons/shared/melee.png")
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus to attacks performed during Basic Stance."
          )
      )
      .setSkill(
        9,
        1,
        new Skill(
          "31",
          "Combat P. Attack Bonus",
          "/assets/icons/braver/combat_p_atk_bonus.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus to Perfect Attacks performed during Katana Combat."
          )
      )
      .setSkill(
        9,
        2,
        new Skill(
          "32",
          "Combat Finish",
          "/assets/icons/braver/combat_p_atk_bonus.png"
        )
          .setMaxLevel(5)
          .setDesc("Grants a damage bonus to Katana Combat Finishers.")
      )
      .setSkill(
        9,
        3,
        new Skill(
          "33",
          "Percision Stance Up",
          "/assets/icons/braver/precision_stance_alt.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus to effective attacks performed during Precision Stance."
          )
      )
      .setSkill(
        9,
        5,
        new Skill(
          "34",
          "Bow Charge Bonus",
          "/assets/icons/braver/bow_charge_bonus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Reduces your PP consumption and charge time for charged Photon Arts performed while a Bow is equipped. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        0,
        new Skill("25", "Basic Stance", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc(
            "Passive Stance skill that provides an unconditional damage bonus."
          )
      )
      .setSkill(
        8,
        1,
        new Skill(
          "26",
          "Katana Combat",
          "/assets/icons/braver/katana_combat.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Katana only. Move at high speed and make slashing attacks on nearby enemies for a set time. Press the skill icon again to unleash a finishing blow."
          )
      )
      .setSkill(
        8,
        3,
        new Skill(
          "27",
          "Precision Stance",
          "/assets/icons/braver/precision_stance.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Active Stance skill. Boosts damage when exploiting an enemy's weak point or Elemental Weakness with a Technique. Renders Basic Stance ineffective."
          )
      )
      .setSkill(
        8,
        4,
        new Skill("28", "Rapid Fire", "/assets/icons/braver/rapid_fire.png")
          .setMaxLevel(5)
          .setDesc(
            "Bow only. For a set time, sacrifices your Bow's standard attack potency and attack interval to perform a combo of up to three consecutive Normal Attacks."
          )
      )
      .setSkill(
        8,
        5,
        new Skill("29", "Charged Shot", "/assets/icons/braver/charged_shot.png")
          .setMaxLevel(5)
          .setDesc(
            "Boosts the potency and round velocity of charged Normal Attacks while a Bow is equipped."
          )
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      7,
      1,
      new Skill("24", "Counter Bonus", "/assets/icons/braver/counter_bonus.png")
        .setMaxLevel(1)
        .setDesc(
          "Grants a potency bonus and recovers PP when a counter or Counter Edge is performed. This skill can only be used with a Main Class."
        )
    );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill("22", "Counter Edge", "/assets/icons/braver/counter_edge.png")
          .setMaxLevel(1)
          .setDesc(
            "Releases an additional strike that skewers enemies when countering."
          )
      )
      .setSkill(
        6,
        2,
        new Skill(
          "23",
          "Katana Focus Boost",
          "/assets/icons/braver/katana_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Increases your Katana Focus boost and boosts your PP recovery while Focus is active. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        1,
        new Skill("18", "Katana Focus", "/assets/icons/braver/katana.png")
          .setMaxLevel(1)
          .setDesc(
            "Boosts Melee Potency as the Focus Gauge is charged. Grants bonus Melee Power and critical rate for a while when you counter with the Focus Gauge maxed out."
          )
      )
      .setSkill(
        5,
        2,
        new Skill("19", "Enhanced Attack", "/assets/icons/shared/melee.png")
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Normal Attacks.")
      )
      .setSkill(
        5,
        3,
        new Skill("20", "Quick Mate", "/assets/icons/braver/quick_mate.png")
          .setMaxLevel(1)
          .setDesc("Enables accelerated use of '-mate' items.")
      )
      .setSkill(
        5,
        4,
        new Skill(
          "21",
          "Perfect Recovery Heal",
          "/assets/icons/braver/heal_recovery.png"
        )
          .setMaxLevel(5)
          .setDesc("Recovers HP when a Perfect Recovery is activated.")
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill("14", "Melee Power Up", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Power.")
      )
      .setSkill(
        4,
        2,
        new Skill("15", "Ranged Power Up", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Ranged Power.")
      )
      .setSkill(
        4,
        4,
        new Skill(
          "16",
          "Perfect Recovery",
          "/assets/icons/shared/sidestep_alt.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to quickly jump up after being knocked back onto the ground."
          )
      )
      .setSkill(
        4,
        5,
        new Skill(
          "17",
          "Sidestep Tackle",
          "/assets/icons/shared/sidestep_alt.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Allows you to inflict melee damage while performing a Sidestep. Doesn't apply to Blinding Sidestep."
          )
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill("11", "Dexterity Up 2", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Dexterity. Produces a stronger effect than Dexterity Up 1."
          )
      )
      .setSkill(
        3,
        4,
        new Skill("12", "Dodge Attack", "/assets/icons/shared/sidestep_alt.png")
          .setSkillType(SkillType.Passive)
          .setDesc("Allows you to attack while performing a Sidestep.")
      )
      .setSkill(
        3,
        5,
        new Skill(
          "13",
          "Advanced Dodge",
          "/assets/icons/shared/sidestep_alt.png"
        )
          .setMaxLevel(10)
          .setDesc("Extends the duration of invulnerability during a Sidestep.")
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
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Boosts the damage you deal when a weapon of Rarity 10 stars or greater is equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        2,
        4,
        new Skill("9", "Braver Mag", "/assets/icons/shared/mag.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Adds a set percentage of an equipped Mag's Dexterity to Melee Power and Ranged Power."
          )
      )
      .setSkill(
        2,
        5,
        new Skill("10", "Dodge", "/assets/icons/shared/sidestep.png")
          .setSkillType(SkillType.Passive)
          .setDesc("Swiftly move a short distance by moving in deftly.")
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
      )
        .setSkillType(SkillType.Passive)
        .setDesc("Makes Perfect-Attack timing apply during a Sidestep.")
    );
  }
  static loadRowOne(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        0,
        0,
        new Skill("1", "Dexterity Up 1", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/shared/sidestep_alt.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(10)
          .setDesc("Jumping during a Dodge Action transitions you into a dash.")
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
          .setDesc(
            "Turns your first attack into a Perfect Attack. A cooldown is applied after activation. Doesn't affect Harmonizer attacks, pet attacks, or Techniques."
          )
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/shared/double_jump.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
          .setDesc("Allows you to perform a break-fall while in the air.")
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
          .setDesc(
            "Makes Perfect-Attack timing apply after a Perfect Recovery."
          )
      )
      .setSkill(
        0,
        5,
        new Skill("6", "Double Jump", "/assets/icons/shared/double_jump.png")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(40)
          .setDesc("Enables two-stage jumping.")
      );
  }
}
