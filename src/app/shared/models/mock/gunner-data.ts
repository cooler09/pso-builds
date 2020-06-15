import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

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
  static loadSkillLines(skillTree: SkillTree) {
    skillTree.vlbSkillIds["0-0"] = true;
    skillTree.vlfSkillIds["1-0"] = true;
    skillTree.vlfSkillIds["2-0"] = true;
    skillTree.vlbSkillIds["2-2"] = true;
    skillTree.vlbSkillIds["2-5"] = true;
    skillTree.vltSkillIds["3-5"] = true;
    skillTree.hlrSkillIds["3-0"] = true;
    skillTree.vlfSkillIds["3-0"] = true;
    skillTree.hllSkillIds["3-1"] = true;
    skillTree.vltSkillIds["3-1"] = true;
    skillTree.vltSkillIds["3-2"] = true;
    skillTree.vlfSkillIds["4-0"] = true;
    skillTree.hlrSkillIds["4-0"] = true;
    skillTree.hllSkillIds["4-1"] = true;
    skillTree.vltSkillIds["4-1"] = true;
    skillTree.vlfSkillIds["5-0"] = true;
    skillTree.hlrSkillIds["5-0"] = true;
    skillTree.hllSkillIds["5-1"] = true;
    skillTree.vltSkillIds["5-1"] = true;
    skillTree.vlfSkillIds["6-0"] = true;
    skillTree.hlrSkillIds["6-0"] = true;
    skillTree.vltSkillIds["6-1"] = true;
    skillTree.hlfSkillIds["6-1"] = true;
    skillTree.vltSkillIds["6-2"] = true;
    skillTree.hlfSkillIds["6-2"] = true;
    skillTree.vlfSkillIds["6-3"] = true;
    skillTree.hlfSkillIds["6-3"] = true;
    skillTree.vlfSkillIds["6-4"] = true;
    skillTree.hllSkillIds["6-4"] = true;
    skillTree.vlfSkillIds["7-0"] = true;
    skillTree.vlfSkillIds["7-3"] = true;
    skillTree.vlfSkillIds["7-4"] = true;
    skillTree.hlrSkillIds["7-4"] = true;
    skillTree.vltSkillIds["7-5"] = true;
    skillTree.hllSkillIds["7-5"] = true;
    skillTree.vlfSkillIds["8-0"] = true;
    skillTree.hlrSkillIds["8-2"] = true;
    skillTree.vltSkillIds["8-2"] = true;
    skillTree.hllSkillIds["8-3"] = true;
    skillTree.vltSkillIds["8-3"] = true;
    skillTree.vltSkillIds["8-4"] = true;
    skillTree.vlbSkillIds["8-5"] = true;
    skillTree.vlfSkillIds["9-0"] = true;
    skillTree.vlfSkillIds["9-5"] = true;
    skillTree.hlrSkillIds["10-0"] = true;
    skillTree.vltSkillIds["10-0"] = true;
    skillTree.hlfSkillIds["10-1"] = true;
    skillTree.vltSkillIds["10-1"] = true;
    skillTree.hlfSkillIds["10-2"] = true;
    skillTree.vltSkillIds["10-2"] = true;
    skillTree.hllSkillIds["10-3"] = true;
    skillTree.vltSkillIds["10-3"] = true;
    skillTree.vltSkillIds["10-5"] = true;
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(11);
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
          "/assets/icons/shared/ranged.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts damage dealt when you hit an enemy with a ranged attack at close range."
          )
      )
      .setSkill(
        10,
        1,
        new Skill(
          "38",
          "Zero Range Critical",
          "/assets/icons/shared/ranged.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your critical rate when you hit an enemy with a ranged attack at close range."
          )
      )
      .setSkill(
        10,
        2,
        new Skill("39", "Attack PP Restorate", "/assets/icons/shared/pp.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts PP recovery when you hit an enemy with a Normal Attack."
          )
      )
      .setSkill(
        10,
        3,
        new Skill("40", "Perfectionist", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc(
            "Increases the damage you deal to enemies when your HP is 75% or greater."
          )
      )
      .setSkill(
        10,
        5,
        new Skill(
          "41",
          "Stylish Roll Perf. Atk Bonus",
          "/assets/icons/gunner/stylish_roll_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a potency bonus to Perfect Attacks performed during Stylish Roll."
          )
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        3,
        new Skill("35", "High Time", "/assets/icons/gunner/time_save.png")
          .setMaxLevel(5)
          .setDesc(
            "Gradually boosts potency during Showtime. Resets when damage taken to a set % of HP over a short time. Skill can only be used with a Main Class."
          )
      )
      .setSkill(
        9,
        5,
        new Skill(
          "36",
          "Stylish Roll Finisher",
          "/assets/icons/gunner/stylish_roll_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Consumes PP to unleash a potent attack if you launch it with the PA button while performing Stylish Roll."
          )
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        2,
        new Skill("31", "Encore Time", "/assets/icons/gunner/encore_time.png")
          .setMaxLevel(1)
          .setDesc(
            "Re-activates Showtime one time only if you take no damage for the entire duration of a Showtime effect."
          )
      )
      .setSkill(
        8,
        3,
        new Skill("32", "Time Save", "/assets/icons/gunner/time_save.png")
          .setMaxLevel(1)
          .setDesc(
            "Decreases the Focus Gauge reduction occurring when you take damage during Showtime. Only works if Twin Machine Guns Focus has been learned."
          )
      )
      .setSkill(
        8,
        4,
        new Skill("33", "Double Chain", "/assets/icons/gunner/double_chain.png")
          .setMaxLevel(1)
          .setDesc(
            "Doubles the chain length built up when attacking while Twin Machine Guns are equipped."
          )
      )
      .setSkill(
        8,
        5,
        new Skill(
          "34",
          "Stylish Roll Up",
          "/assets/icons/gunner/stylish_roll_up.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts the damage you deal to enemies while performing Stylish Roll."
          )
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
          "/assets/icons/shared/ranged.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts damage dealt when you hit an enemy with a ranged attack at close range."
          )
      )
      .setSkill(
        7,
        3,
        new Skill(
          "28",
          "Showtime Star",
          "/assets/icons/gunner/showtime_star.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts Max PP when Twin Machine Guns are equipped during Showtime."
          )
      )
      .setSkill(
        7,
        4,
        new Skill("29", "Chain Finish", "/assets/icons/gunner/chain_finish.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts damage by a Chain Finisher Boost done using melee or ranged attack while Twin Machine Guns are equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        7,
        5,
        new Skill(
          "30",
          "Chain Finisher Bonus",
          "/assets/icons/gunner/chain_finisher_bonus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Reduces the cooldown time of the Chain Trigger according to chain length when a Chain Finisher Boost is activated."
          )
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
          "/assets/icons/gunner/adv_aerial.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts the damage you deal when you hit an enemy in the air with an attack."
          )
      )
      .setSkill(
        6,
        2,
        new Skill(
          "24",
          "Auto-Mate Deadline",
          "/assets/icons/shared/auto_mate.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Automatically uses a '-mate' item when your HP falls below 25%."
          )
      )
      .setSkill(
        6,
        3,
        new Skill("25", "Showtime", "/assets/icons/gunner/showtime.png")
          .setMaxLevel(10)
          .setDesc(
            "Twin Machine Guns only. Greatly boosts your Focus Gauge charge rate in exchange for an increased threat level against you for a set time."
          )
      )
      .setSkill(
        6,
        4,
        new Skill(
          "26",
          "Chain Trigger",
          "/assets/icons/gunner/chain_trigger.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Starts a chain when you score a hit with a Normal Attack following Skill Activation."
          )
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
          "/assets/icons/gunner/twin_machine_gun_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Charges your Focus Gauge and boosts attack potency when you successfully land an attack."
          )
      )
      .setSkill(
        5,
        5,
        new Skill(
          "22",
          "Perfect Recovery",
          "/assets/icons/shared/sidestep_alt_blue.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to quickly jump up after being knocked back onto the ground."
          )
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill("17", "Ranged PWR Up 3", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Ranged Power. Produces a stronger effect than Ranged Power Up 1."
          )
      )
      .setSkill(
        4,
        2,
        new Skill("18", "HP Up", "/assets/icons/shared/hp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max HP.")
      )
      .setSkill(
        4,
        4,
        new Skill(
          "19",
          "Twin Mach. Guns Stylish Charge",
          "/assets/icons/gunner/twin_machine_stylish_charge.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Eliminates Charge Time incurred when a PA or Technique is chained to a different charged PA while Twin Machine Guns are equipped. For Main Class Only."
          )
      )
      .setSkill(
        4,
        5,
        new Skill(
          "20",
          "Dive Roll Shot",
          "/assets/icons/shared/sidestep_alt_blue.png"
        )
          .setMaxLevel(1)
          .setDesc("Allows you to attack while performing a Dive Roll.")
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill("12", "Ranged PWR Up 2", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Ranged Power. Produces a stronger effect than Ranged Power Up 1."
          )
      )
      .setSkill(
        3,
        2,
        new Skill("13", "Dexterity Up 2", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Dexterity. Produces a stronger effect than Dexterity Up 1."
          )
      )
      .setSkill(
        3,
        3,
        new Skill(
          "14",
          "Ranged DEF Up 2",
          "/assets/icons/shared/ranged_def.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts your Ranged Defense.")
      )
      .setSkill(
        3,
        4,
        new Skill(
          "15",
          "Twin Machine Guns Mastery",
          "/assets/icons/gunner/twin_machine_guns.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Increases PP recovery and grants a critical damage bonus when Twin Machine Guns are equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        3,
        5,
        new Skill(
          "16",
          "Advanced Dive Roll",
          "/assets/icons/shared/sidestep_alt_blue.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Extends the duration of invulnerability during a Dive Roll."
          )
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        2,
        new Skill("8", "Dexterity Up 1", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
      )
      .setSkill(
        2,
        3,
        new Skill("9", "Ranged DEF Up 1", "/assets/icons/shared/ranged_def.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Ranged Defense.")
      )
      .setSkill(
        2,
        4,
        new Skill(
          "10",
          "Arms Enthusiast: Gunner",
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
        new Skill("11", "Dive Roll", "/assets/icons/shared/sidestep_blue.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to move quickly over short distances by performing a jump-dive-like movement."
          )
      );
  }
  static loadRowTwo(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      1,
      5,
      new Skill(
        "7",
        "Sidestep & Perf. ATK Combo",
        "/assets/icons/shared/sidestep_alt_blue.png"
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
        new Skill("1", "Ranged PWR Up 1", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Ranged Power.")
      )
      .setSkill(
        0,
        1,
        new Skill(
          "2",
          "Sidestep Jump",
          "/assets/icons/shared/sidestep_alt_blue.png"
        )
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
