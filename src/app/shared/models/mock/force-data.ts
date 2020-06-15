import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

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
  static loadSkillLines(skillTree: SkillTree) {
    skillTree.vlbSkillIds["0-0"] = true;
    skillTree.vlfSkillIds["1-0"] = true;
    skillTree.vlfSkillIds["2-0"] = true;
    skillTree.vlbSkillIds["2-5"] = true;
    skillTree.vltSkillIds["3-5"] = true;
    skillTree.hlrSkillIds["3-0"] = true;
    skillTree.vlfSkillIds["3-0"] = true;
    skillTree.hllSkillIds["3-1"] = true;
    skillTree.vltSkillIds["3-1"] = true;
    skillTree.vlfSkillIds["4-0"] = true;
    skillTree.vlfSkillIds["5-0"] = true;
    skillTree.hlrSkillIds["5-0"] = true;
    skillTree.hllSkillIds["5-1"] = true;
    skillTree.vltSkillIds["5-1"] = true;
    skillTree.vlfSkillIds["6-0"] = true;
    skillTree.hlrSkillIds["6-0"] = true;
    skillTree.vltSkillIds["6-1"] = true;
    skillTree.hlfSkillIds["6-1"] = true;
    skillTree.vlfSkillIds["6-2"] = true;
    skillTree.hlfSkillIds["6-2"] = true;
    skillTree.vltSkillIds["6-3"] = true;
    skillTree.hlfSkillIds["6-3"] = true;
    skillTree.vltSkillIds["6-4"] = true;
    skillTree.hllSkillIds["6-4"] = true;
    skillTree.vlfSkillIds["7-0"] = true;
    skillTree.vltSkillIds["7-2"] = true;
    skillTree.vlfSkillIds["8-0"] = true;
    skillTree.hlrSkillIds["8-0"] = true;
    skillTree.hlfSkillIds["8-1"] = true;
    skillTree.vltSkillIds["8-1"] = true;
    skillTree.hllSkillIds["8-2"] = true;
    skillTree.vltSkillIds["8-2"] = true;
    skillTree.vlfSkillIds["9-0"] = true;
    skillTree.hlrSkillIds["9-0"] = true;
    skillTree.hllSkillIds["9-1"] = true;
    skillTree.vlfSkillIds["9-1"] = true;
    skillTree.vlfSkillIds["10-0"] = true;
    skillTree.hlrSkillIds["10-1"] = true;
    skillTree.vlfSkillIds["10-1"] = true;
    skillTree.hllSkillIds["10-2"] = true;
    skillTree.vltSkillIds["10-2"] = true;
    skillTree.vlfSkillIds["11-0"] = true;
    skillTree.vltSkillIds["11-1"] = true;
    skillTree.vlfSkillIds["12-0"] = true;
    skillTree.hlrSkillIds["12-0"] = true;
    skillTree.hlfSkillIds["12-1"] = true;
    skillTree.hlfSkillIds["12-2"] = true;
    skillTree.vlfSkillIds["12-2"] = true;
    skillTree.hlfSkillIds["12-3"] = true;
    skillTree.hllSkillIds["12-4"] = true;
    skillTree.vlfSkillIds["12-4"] = true;
    skillTree.vlfSkillIds["13-0"] = true;
    skillTree.hlrSkillIds["13-0"] = true;
    skillTree.hllSkillIds["13-1"] = true;
    skillTree.vltSkillIds["13-1"] = true;
    skillTree.vlfSkillIds["13-2"] = true;
    skillTree.hlrSkillIds["13-2"] = true;
    skillTree.hllSkillIds["13-3"] = true;
    skillTree.vltSkillIds["13-3"] = true;
    skillTree.vlfSkillIds["13-4"] = true;
    skillTree.hlrSkillIds["13-4"] = true;
    skillTree.hllSkillIds["13-5"] = true;
    skillTree.vltSkillIds["13-5"] = true;
    skillTree.vltSkillIds["14-0"] = true;
    skillTree.hlrSkillIds["14-0"] = true;
    skillTree.hllSkillIds["14-1"] = true;
    skillTree.vltSkillIds["14-1"] = true;
    skillTree.hlrSkillIds["14-2"] = true;
    skillTree.vlfSkillIds["14-2"] = true;
    skillTree.vltSkillIds["14-3"] = true;
    skillTree.hllSkillIds["14-3"] = true;
    skillTree.vltSkillIds["14-4"] = true;
    skillTree.hlrSkillIds["14-4"] = true;
    skillTree.hllSkillIds["14-5"] = true;
    skillTree.vltSkillIds["14-5"] = true;
    skillTree.hlrSkillIds["15-2"] = true;
    skillTree.vltSkillIds["15-2"] = true;
    skillTree.hllSkillIds["15-3"] = true;
    skillTree.vlfSkillIds["15-3"] = true;
    skillTree.vltSkillIds["16-3"] = true;
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(17);
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
        "/assets/icons/force/detonation_boost.png"
      )
        .setMaxLevel(5)
        .setDesc("Boosts the potency and area of effect of Frozen Detonation.")
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
          "/assets/icons/force/freeze_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Ice Techniques.")
      )
      .setSkill(
        15,
        3,
        new Skill(
          "46",
          "Frozen Detonation",
          "/assets/icons/force/frozen_detonation.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Deals major damage with an explosive blast to fozen enemies."
          )
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
          "/assets/icons/force/flame_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Fire Techniques.")
      )
      .setSkill(
        14,
        1,
        new Skill("41", "Burn Boost", "/assets/icons/force/flame_mastery.png")
          .setMaxLevel(10)
          .setDesc("Boosts the chance of inflicting a Burn status ailment.")
      )
      .setSkill(
        14,
        3,
        new Skill(
          "42",
          "Freeze Boost",
          "/assets/icons/force/freeze_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the chance of inflicting a Freeze status ailment.")
      )
      .setSkill(
        14,
        4,
        new Skill(
          "43",
          "Lightning Mastery 2",
          "/assets/icons/force/lightning_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Lightning Techniques.")
      )
      .setSkill(
        14,
        5,
        new Skill(
          "44",
          "Shock Boost",
          "/assets/icons/force/lightning_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the chance of inflicting a Shock status ailment.")
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
          "/assets/icons/force/flame_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Reduces the charging time of Fire Techniques.")
      )
      .setSkill(
        13,
        3,
        new Skill("38", "Deep Freeze", "/assets/icons/force/deep_freeze.png")
          .setMaxLevel(5)
          .setDesc(
            "Boosts resistance to the Freeze status ailment and makes it harder to undo with attacks."
          )
      )
      .setSkill(
        13,
        5,
        new Skill(
          "39",
          "Lightning Tech PP Preservation",
          "/assets/icons/force/lightning_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Reduces the amount of PP consumed by Lightning Techniques.")
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
          "/assets/icons/force/flame_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the potency of Fire Techniques.")
      )
      .setSkill(
        12,
        2,
        new Skill(
          "35",
          "Freeze Mastery 1",
          "/assets/icons/force/freeze_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the potency of Ice Techniques.")
      )
      .setSkill(
        12,
        4,
        new Skill(
          "36",
          "Lightning Mastery 1",
          "/assets/icons/force/lightning_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the potency of Lightning Techniques.")
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      11,
      1,
      new Skill(
        "33",
        "Photo Flare Boost",
        "/assets/icons/force/photon_flare_boost.png"
      )
        .setMaxLevel(10)
        .setDesc(
          "Boosts the chance of inflicting a status ailment when Photon Flare is activated."
        )
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
          "/assets/icons/force/photon_flare_alt.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Further boosts your Technique Power when Photon Flare is activated."
          )
      )
      .setSkill(
        10,
        2,
        new Skill(
          "32",
          "Photon Flare Afterburst",
          "/assets/icons/force/photon_flare_alt.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Boosts your Technique Power for 30 seconds after the end of a Photon Flare effect."
          )
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      9,
      1,
      new Skill("30", "Photon Flare", "/assets/icons/force/photon_flare.png")
        .setMaxLevel(10)
        .setDesc("Temporarily boosts your Technique Power.")
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
          "/assets/icons/shared/tech.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts damage dealt using Charged Techniques.")
      )
      .setSkill(
        8,
        2,
        new Skill(
          "29",
          "Advanced Tech Charge 2",
          "/assets/icons/shared/tech.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts damage dealt using Charged Techniques.")
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      7,
      2,
      new Skill(
        "27",
        "Rod Preservation Bonus",
        "/assets/icons/force/rod_preservation.png"
      )
        .setMaxLevel(1)
        .setDesc(
          "While a Rod is equipped, allows you to use a Technique maintained with Charged Escape without consuming PP."
        )
    );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill("23", "Advanced Normal Tech", "/assets/icons/shared/tech.png")
          .setMaxLevel(10)
          .setDesc("Boosts damage dealt by uncharged Techniques.")
      )
      .setSkill(
        6,
        2,
        new Skill(
          "24",
          "Charged Escape",
          "/assets/icons/force/charged_escape.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Temporarily maintains charging when you perform a Dodge Action while charging a Technique. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        6,
        3,
        new Skill("25", "Charged PP Revival", "/assets/icons/shared/pp.png")
          .setMaxLevel(1)
          .setDesc("Recovers PP while a Technique is being charged.")
      )
      .setSkill(
        6,
        4,
        new Skill(
          "26",
          "Advanced Tech. Perfect Attacks",
          "/assets/icons/shared/tech.png"
        )
          .setMaxLevel(10)
          .setDesc("Grants a damage bonus to Technique Perfect Attacks.")
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
          "/assets/icons/shared/tech.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your Technique Power. Produces a stronger effect than a Technique Power Up."
          )
      )
      .setSkill(
        5,
        4,
        new Skill("21", "Element Conversion", "/assets/icons/shared/tech.png")
          .setMaxLevel(5)
          .setDesc(
            "Converts your weapon's Element Level into a Technique damage bonus. Bonus is increased if the weapon and Technique Elements match. For Main Class only."
          )
      )
      .setSkill(
        5,
        5,
        new Skill(
          "22",
          "Tech Charge JA Addition",
          "/assets/icons/shared/tech_charge.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Grants an effect that converts your Charged Techniques into Perfect Attacks. A cooldown is applied after activation."
          )
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
          "/assets/icons/force/talis_fast_throw.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Boosts you Talis speed. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        4,
        5,
        new Skill(
          "19",
          "Photon Bullet",
          "/assets/icons/force/photon_bullet.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Adds a Technique round when you perform a Normal Attack with a Rod. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill("13", "Tech. Power Up 2", "/assets/icons/shared/tech.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Technique Power. Produces a stronger effect than Technique Power Up 1."
          )
      )
      .setSkill(
        3,
        2,
        new Skill("14", "PP Up 2", "/assets/icons/shared/pp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max PP.")
      )
      .setSkill(
        3,
        3,
        new Skill("15", "HP Up", "/assets/icons/shared/hp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max HP.")
      )
      .setSkill(
        3,
        4,
        new Skill(
          "16",
          "Talis Tech Bonus",
          "/assets/icons/force/talis_tech.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Grants a potency bonus to Techniques activated from a thrown Talis."
          )
      )
      .setSkill(
        3,
        5,
        new Skill(
          "17",
          "Perfect Recovery",
          "/assets/icons/force/sidestep_alt.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to quickly jump up after being knocked back onto the ground."
          )
      );
  }
  static loadRowThree(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        2,
        1,
        new Skill("8", "Dexterity Up", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
      )
      .setSkill(
        2,
        2,
        new Skill("9", "PP Up 1", "/assets/icons/shared/pp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max PP.")
      )
      .setSkill(
        2,
        3,
        new Skill(
          "10",
          "Technique DEF Up",
          "/assets/icons/shared/tech_def_up.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts your Technique Defense.")
      )
      .setSkill(
        2,
        4,
        new Skill(
          "11",
          "Arms Enthusiast: Force",
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
        new Skill("12", "Blind Escape", "/assets/icons/force/sidestep.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to move a set distance in an invulnerable state after disrupting the enemy's vision."
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
        "/assets/icons/force/sidestep_alt.png"
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
        new Skill("1", "Tech. Power Up 1", "/assets/icons/shared/tech.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Technique Power.")
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/force/sidestep_alt.png")
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
          "Perf. Recovery & ARK Combo",
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
