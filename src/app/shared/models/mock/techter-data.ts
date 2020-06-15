import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

export default class TechterData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "13", 3);
    skillTree.setDependency("1", "17", 1);
    skillTree.setDependency("1", "20", 1);
    skillTree.setDependency("1", "21", 3);
    skillTree.setDependency("1", "22", 3);
    skillTree.setDependency("1", "23", 3);
    skillTree.setDependency("1", "24", 3);
    skillTree.setDependency("1", "25", 3);
    skillTree.setDependency("1", "30", 1);
    skillTree.setDependency("1", "31", 3);
    skillTree.setDependency("1", "32", 3);
    skillTree.setDependency("1", "33", 3);
    skillTree.setDependency("1", "34", 5);
    skillTree.setDependency("1", "39", 3);
    skillTree.setDependency("1", "40", 3);
    skillTree.setDependency("1", "41", 3);
    skillTree.setDependency("1", "42", 3);
    skillTree.setDependency("22", "26", 3);
    skillTree.setDependency("22", "27", 3);
    skillTree.setDependency("24", "28", 3);
    skillTree.setDependency("24", "29", 3);
    skillTree.setDependency("30", "35", 3);
    skillTree.setDependency("30", "36", 1);
    skillTree.setDependency("32", "37", 1);
    skillTree.setDependency("39", "43", 2);
    skillTree.setDependency("39", "44", 3);
    skillTree.setDependency("40", "45", 2);
    skillTree.setDependency("40", "46", 3);
    skillTree.setDependency("41", "47", 3);
    skillTree.setDependency("41", "48", 2);
    skillTree.setDependency("41", "49", 5);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(14);
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

    TechterData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowFourteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        13,
        4,
        new Skill(
          "48",
          "Dark Mastery 2",
          "/assets/icons/techter/dark_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Dark Techniques.")
      )
      .setSkill(
        13,
        5,
        new Skill(
          "49",
          "Poison Detonation",
          "/assets/icons/techter/poison_detonation.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Blasts poisoned enemies, dealing major damage. Other enemies caught up in the blast may also be poisoned."
          )
      );
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        12,
        0,
        new Skill(
          "43",
          "Wind Mastery 2",
          "/assets/icons/techter/wind_master.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Wind Techniques.")
      )
      .setSkill(
        12,
        1,
        new Skill("44", "Blind Boost", "/assets/icons/techter/blind_boost.png")
          .setMaxLevel(10)
          .setDesc("Boosts the chance of inflicting a Blind status ailment.")
      )
      .setSkill(
        12,
        2,
        new Skill(
          "45",
          "Light Mastery 2",
          "/assets/icons/techter/light_mastery.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the potency of Light Techniques.")
      )
      .setSkill(
        12,
        3,
        new Skill("46", "Panic Boost", "/assets/icons/techter/panic_boost.png")
          .setMaxLevel(10)
          .setDesc("Boosts the chance of inflicting a Panic status ailment.")
      )
      .setSkill(
        12,
        5,
        new Skill(
          "47",
          "Poison Boost",
          "/assets/icons/techter/poison_boost.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the chance of inflicting a Poison status ailment.")
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        0,
        new Skill(
          "39",
          "Wind Mastery 1",
          "/assets/icons/techter/wind_master.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the potency of Wind Techniques.")
      )
      .setSkill(
        11,
        3,
        new Skill(
          "40",
          "Light Mastery 1",
          "/assets/icons/techter/light_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the potency of Light Techniques.")
      )
      .setSkill(
        11,
        4,
        new Skill(
          "41",
          "Dark Mastery 1",
          "/assets/icons/techter/dark_mastery.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts the potency of Dark Techniques.")
      )
      .setSkill(
        11,
        5,
        new Skill(
          "42",
          "Elemental Percision Hit",
          "/assets/icons/techter/ele_percision_hit.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts damage dealt against an enemy's Elemental Weakness.")
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      10,
      3,
      new Skill(
        "38",
        "Territory PP Save",
        "/assets/icons/techter/territory_pp_save.png"
      )
        .setMaxLevel(5)
        .setDesc(
          "Reduces PP cost of support Techniques. Only works if Territory Burst has been learned."
        )
    );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        9,
        1,
        new Skill(
          "35",
          "Wand Reactor",
          "/assets/icons/techter/wand_reactor.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Adds Melee Power based on a set percentage of the Technique Power of the equipped Wand."
          )
      )
      .setSkill(
        9,
        2,
        new Skill(
          "36",
          "Wand Focus Element",
          "/assets/icons/techter/wand_focus_ele.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Inflicts a status ailment when Photonic Fury is used. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        9,
        3,
        new Skill(
          "37",
          "Support Range Extender",
          "/assets/icons/techter/support_range_extender.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Boosts the area of effect of [Resta], [Anti], [Shifta], and [Deband]. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        1,
        new Skill("30", "Wand Lovers", "/assets/icons/techter/wand_lovers.png")
          .setMaxLevel(5)
          .setDesc(
            "Grants a bonus to your Wand Focus, Normal Attack, and Photonic Fury potency, and enables fast Sidestep attacks. Only works if Wand Focus has been learned."
          )
      )
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "PP Converstion",
          "/assets/icons/techter/pp_conversion.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts automatic PP recovery for a set time, while lowering your Max HP."
          )
      )
      .setSkill(
        8,
        3,
        new Skill(
          "32",
          "Territory Burst",
          "/assets/icons/techter/territory_burst.png"
        )
          .setMaxLevel(1)
          .setDesc("Boosts the area of effect of support Techniques.")
      )
      .setSkill(
        8,
        4,
        new Skill(
          "33",
          "Super Treatment",
          "/assets/icons/techter/super_treatment.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "When you heal from a status ailment, boosts automatic PP recovery for a set time and recovers your HP and your target's HP."
          )
      )
      .setSkill(
        8,
        5,
        new Skill(
          "34",
          "Reverser Field",
          "/assets/icons/techter/reverser_field.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Deploys a field that revives nearby allies. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        7,
        2,
        new Skill(
          "26",
          "Critical Shifta",
          "/assets/icons/techter/adv_shifta.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts the chance of scoring a critical hit while Shifta is in effect."
          )
      )
      .setSkill(
        7,
        3,
        new Skill("27", "Shifta Strike", "/assets/icons/techter/adv_shifta.png")
          .setMaxLevel(5)
          .setDesc(
            "Increases the damage you deal to enemies while Shifta is in effect. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        7,
        4,
        new Skill("28", "Deband Cut", "/assets/icons/techter/adv_deband.png")
          .setMaxLevel(5)
          .setDesc(
            "Reduces damage you take by a set percentage while Deband is in effect."
          )
      )
      .setSkill(
        7,
        5,
        new Skill(
          "29",
          "Deband Toughness",
          "/assets/icons/techter/adv_deband.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your Max HP while Deband is in effect. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill("21", "PP Restorate", "/assets/icons/shared/pp.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts automatic PP recovery. Further boosts automatic PP recovery while stationary."
          )
      )
      .setSkill(
        6,
        2,
        new Skill(
          "22",
          "Advanced Shifta",
          "/assets/icons/techter/adv_shifta.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the effect of Shifta.")
      )
      .setSkill(
        6,
        3,
        new Skill("23", "Advanced Resta", "/assets/icons/techter/adv_resta.png")
          .setMaxLevel(5)
          .setDesc("Boosts the amount of HP recovered by Resta.")
      )
      .setSkill(
        6,
        4,
        new Skill(
          "24",
          "Advanced Deband",
          "/assets/icons/techter/adv_deband.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts the effect of Deband.")
      )
      .setSkill(
        6,
        5,
        new Skill(
          "25",
          "Reverse Bonus",
          "/assets/icons/techter/reverse_bonus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Your own Shifta and Deband are applied to allies that have been revived."
          )
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      5,
      1,
      new Skill("20", "Wand Focus", "/assets/icons/techter/wand_focus.png")
        .setMaxLevel(1)
        .setDesc(
          "Charges your Focus Gauge when you hit an enemy with a Charged Technique and activates Photonic Fury when you perform a Normal Attack."
        )
    );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill("17", "Melee Power Up", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Power.")
      )
      .setSkill(
        4,
        3,
        new Skill(
          "18",
          "Longarm Assist",
          "/assets/icons/techter/extend_assist.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Increases the effect duration each time for Shifta and Deband. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        4,
        5,
        new Skill(
          "19",
          "Tech Charge JA Addition",
          "/assets/icons/shared/tech_charge.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Grants an effect that converts your Charged Techniques into Perfect Attacks. A cooldown is applied after activation."
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
        new Skill(
          "15",
          "Extend Assist",
          "/assets/icons/techter/extend_assist.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Extends the maximum effect duration of Shifta and Deband to 180 seconds."
          )
      )
      .setSkill(
        3,
        5,
        new Skill(
          "16",
          "Perfect Recovery",
          "/assets/icons/shared/sidestep_alt_yellow.png"
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
          "Arms Enthusiast: Techter",
          "/assets/icons/shared/arms_enthusiast.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Boosts the damage you deal when a weapon of Rarity 10 star or greater is equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        2,
        5,
        new Skill(
          "12",
          "Blind Escape",
          "/assets/icons/shared/sidestep_yellow.png"
        )
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
        "/assets/icons/shared/sidestep_alt_yellow.png"
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
        new Skill(
          "2",
          "Sidestep Jump",
          "/assets/icons/shared/sidestep_alt_yellow.png"
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
