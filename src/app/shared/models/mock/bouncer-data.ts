import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

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
    skillTree.setDependency("10", "14", 3);
    skillTree.setDependency("15", "20", 1);
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
          "/assets/icons/bouncer/break_stance_alt.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus when you attack a destructible body part while Break Stance is active."
          )
      )
      .setSkill(
        15,
        3,
        new Skill(
          "43",
          "Break Stance Critical",
          "/assets/icons/bouncer/break_stance_alt.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your critical hit rate when you attack a destructible body part while Break Stance is active."
          )
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
          "/assets/icons/bouncer/ele_stance.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "While Elemental Stance is active, grants damage bonus when exploiting enemy's weakness with a Technique or Elemental weapon the enemy is weak against."
          )
      )
      .setSkill(
        14,
        1,
        new Skill(
          "40",
          "Elemental Stance Critical",
          "/assets/icons/bouncer/ele_stance.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "While Elemental Stance is active, boosts critical hit rate when exploiting enemy's weakness with a Technique or Elemental weapon the enemy is weak against."
          )
      )
      .setSkill(
        14,
        3,
        new Skill(
          "41",
          "Break Stance D bonus",
          "/assets/icons/bouncer/break_stance_d_bonus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Makes the skill [Break Stance] effective against areas that can't be destroyed while Soaring Blades are equipped. This skill can only be used with a Main Class."
          )
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
          "/assets/icons/bouncer/ele_stance.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Passive Stance that boosts damage when exploiting an enemy's Elemental Weakness with a Technique or using an Elemental weapon the enemy is weak against."
          )
      )
      .setSkill(
        13,
        2,
        new Skill(
          "38",
          "Break Stance",
          "/assets/icons/bouncer/break_stance.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Active Stance skill that increases the damage you deal to destructible body parts. Renders Elemental Stance ineffective."
          )
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
          "/assets/icons/bouncer/rapid_boost_ja_bonus.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Jet Boots only. Grants a potency bonus to Perfect Attacks performed during Rapid Boost."
          )
      )
      .setSkill(
        12,
        4,
        new Skill(
          "36",
          "Photon Blades Fever Up",
          "/assets/icons/bouncer/photon_blades_fever_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Increases the potency of your Photon Blades while Photon Blade Fever is in effect."
          )
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        1,
        new Skill("30", "Rapid Boost", "/assets/icons/bouncer/rapid_boost.png")
          .setMaxLevel(5)
          .setDesc(
            "Greatly boosts your Jet Boots PA charge speed while in effect. Also slightly boosts your Technique charge speed."
          )
      )
      .setSkill(
        11,
        2,
        new Skill(
          "31",
          "Elemental Burst",
          "/assets/icons/bouncer/ele_burst.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Triggers an elemental blast which can inflict a status ailment when a Weapon Action cancels an Element stored in your Focus Gauge. Jet Boots Focus required."
          )
      )
      .setSkill(
        11,
        3,
        new Skill(
          "32",
          "Switch Strike",
          "/assets/icons/bouncer/switch_strike.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Causes attacks performed using Jet Boots to be executed using Melee Power. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        11,
        4,
        new Skill(
          "33",
          "Photon Blades Fever",
          "/assets/icons/bouncer/photon_blades_escape.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Doubles the number of Photon Blade attacks while in effect."
          )
      )
      .setSkill(
        11,
        5,
        new Skill(
          "34",
          "Photon Blades Escape",
          "/assets/icons/bouncer/photon_blade_escape.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Activates a period of invulnerability when you move while using Photon Blades."
          )
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      10,
      4,
      new Skill("29", "Healing Bonus", "/assets/icons/shared/hp.png")
        .setMaxLevel(5)
        .setDesc("Grants a recovery bonus when you recover HP.")
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
          "/assets/icons/bouncer/shifta_air_attack_boost.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus to attacks performed in the air while Shifta is in effect."
          )
      )
      .setSkill(
        9,
        3,
        new Skill(
          "27",
          "Deband Attack PP Restorate",
          "/assets/icons/bouncer/deband_atk_pp_restorate.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts the PP recovery of Normal Attacks while Deband is in effect."
          )
      )
      .setSkill(
        9,
        4,
        new Skill(
          "28",
          "Heal Sharing",
          "/assets/icons/bouncer/heal_sharing.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "When you recover HP, surrounding characters will also be healed by a set percentage of the amount of HP you recovered."
          )
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      8,
      5,
      new Skill(
        "25",
        "Perfect Recovery PP Gain",
        "/assets/icons/bouncer/pp_gain_recovery.png"
      )
        .setMaxLevel(5)
        .setDesc("Recovers PP when a Perfect Recovery is activated.")
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
          "/assets/icons/bouncer/pp_restorate_field.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Deploys a field around you that increases PP recovery when you connect an attack exploiting the enemy's Elemental Weakness."
          )
      )
      .setSkill(
        7,
        2,
        new Skill(
          "22",
          "Critical Field",
          "/assets/icons/bouncer/critical_field.png"
        )
          .setMaxLevel(5)
          .setDesc("Deploys a field around you that boosts your critical rate.")
      )
      .setSkill(
        7,
        4,
        new Skill(
          "23",
          "Field Remain",
          "/assets/icons/bouncer/field_remain.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Maintains a field effect for a set time even outside the area of effect of a field used by the learner. Only effective for fields that produce player-enhancing effects."
          )
      )
      .setSkill(
        7,
        5,
        new Skill(
          "24",
          "Perfect Recovery",
          "/assets/icons/shared/sidestep_alt.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to quickly jump up after being knocked back onto the ground."
          )
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      6,
      1,
      new Skill(
        "20",
        "Jet Boots Focus Boost",
        "/assets/icons/bouncer/jet_boots_focus_boost.png"
      )
        .setMaxLevel(1)
        .setDesc(
          "Boosts the increment by which your Focus Gauge increases due to attacks while Shifta or Deband are in effect and Jet Boots are equipped. Main Class only."
        )
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
          "/assets/icons/bouncer/jet_boots_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Builds Focus when you land an attack or change a Technique. Applies the Element of the last Technique you charged to your weapon and boosts attack potency."
          )
      )
      .setSkill(
        5,
        2,
        new Skill(
          "16",
          "Jet Boots Escape",
          "/assets/icons/bouncer/jet_boots_escape.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Makes you inculnerable for a period of time when you perform a Normal Attack or PA while Jet Boots are equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        5,
        3,
        new Skill("17", "Encore Jump", "/assets/icons/bouncer/encore_jump.png")
          .setMaxLevel(1)
          .setDesc(
            "Allows additional jump for trample ATK during Focus Gauge accumulation, normal ATK or PA with Jet Boots equipped. Can only be used with Main Class."
          )
      )
      .setSkill(
        5,
        4,
        new Skill(
          "18",
          "Soaring Blades Focus",
          "/assets/icons/bouncer/blades_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Boosts potency of your PA based on Focus level and let's you use the Focus Gauge to throw Photon Blades with a Weapon Action. Attacks increase PP recovery."
          )
      )
      .setSkill(
        5,
        5,
        new Skill("19", "Dodge Attack", "/assets/icons/shared/sidestep_alt.png")
          .setSkillType(SkillType.Passive)
          .setDesc("Allows you to attack while performing a Sidestep.")
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      4,
      1,
      new Skill("14", "Melee Power Up 2", "/assets/icons/shared/melee.png")
        .setMaxLevel(10)
        .setDesc(
          "Boosts your Melee Power. Produces a stronger effect than Melee Power Up 1."
        )
    );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill("10", "Melee Power Up 1", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Power.")
      )
      .setSkill(
        3,
        2,
        new Skill("11", "Tech. Power Up", "/assets/icons/shared/tech.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Technique Power.")
      )
      .setSkill(
        3,
        4,
        new Skill("12", "Bouncer Mag", "/assets/icons/shared/mag.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Adds a set percentage of an equipped Mag's Dexterity to Melee Power and Technique Power."
          )
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
        4,
        new Skill(
          "8",
          "Arms Enthusiast: Bouncer",
          "/assets/icons/shared/arms_enthusiast.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Boosts the damage you deal when a weapon of Rarity 10 stars or greater is equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        2,
        5,
        new Skill("9", "Binding Sidestep", "/assets/icons/shared/sidestep.png")
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
        new Skill("1", "Dexterity Up", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/shared/sidestep_alt.png")
          .setDesc("Jumping during a Dodge Action transitions you into a dash.")
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
          .setDesc(
            "Turns your first attack into a Perfect Attack. A cooldown is applied after activation. Doesn't affect Harmonizer attacks, pet attacks, or Techniques."
          )
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(20)
          .setDesc(
            "Turns your first attack into a Perfect Attack. A cooldown is applied after activation. Doesn't affect Harmonizer attack, pet attacks, or Techniques."
          )
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/shared/double_jump.png")
          .setDesc("Allows you to perform a break-fall while in the air.")
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
          .setDesc(
            "Makes Perfect-Attack timing apply after a Perfect Recovery."
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
          .setDesc("Enables two-stage jumping.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(40)
          .setDesc("Enables two-stage jumping.")
      );
  }
}
