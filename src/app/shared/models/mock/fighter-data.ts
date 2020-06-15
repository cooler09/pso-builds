import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

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
          "/assets/icons/fighter/chaser_damage.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus when performing an attack on an enemy that is affected by a status ailment."
          )
      )
      .setSkill(
        10,
        1,
        new Skill("41", "Chaser Bind", "/assets/icons/fighter/chaser_bind.png")
          .setMaxLevel(10)
          .setDesc(
            "Grants a chance of triggering a bind state when performing a melee attack on an enemy that is affected by a status ailment."
          )
      )
      .setSkill(
        10,
        2,
        new Skill(
          "42",
          "Photon Slayer",
          "/assets/icons/fighter/photon_slayer.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power, Ranged Power, and Technique Power when your PP falls below 50%."
          )
      )
      .setSkill(
        10,
        3,
        new Skill("43", "Crazy Heart", "/assets/icons/fighter/crazy_heart.png")
          .setMaxLevel(5)
          .setDesc(
            "Boosts automatic PP recovery as well as PP recovery following an attack while you have a status ailment."
          )
      )
      .setSkill(
        10,
        4,
        new Skill("44", "Crazy Beat", "/assets/icons/fighter/crazy_beat.png")
          .setMaxLevel(5)
          .setDesc("Boosts your Melee Power while you have a status ailment.")
      )
      .setSkill(
        10,
        5,
        new Skill(
          "45",
          "Overload Photon Charge",
          "/assets/icons/fighter/overload_photon_charge.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Completely restores your PP upon completion of an Overload. This skill can only be used with a Main Class."
          )
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
          "/assets/icons/fighter/chaser_damage.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Grants a damage bonus when performing a melee attack on an enemy that is affected by a status ailment."
          )
      )
      .setSkill(
        9,
        1,
        new Skill(
          "36",
          "Halfline Boost",
          "/assets/icons/fighter/halfline_boost.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts the chance of inflicting status ailments when your HP falls below 50%."
          )
      )
      .setSkill(
        9,
        2,
        new Skill(
          "37",
          "Deadline Slayer",
          "/assets/icons/fighter/halfline_slayer.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power, Ranged Power, and Technique Power when your HP falls below 25%."
          )
      )
      .setSkill(
        9,
        3,
        new Skill(
          "38",
          "Halfline Slayer",
          "/assets/icons/fighter/halfline_slayer.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power, Ranged Power, and Technique Power when  your HP falls below 50%."
          )
      )
      .setSkill(
        9,
        5,
        new Skill("39", "Overload", "/assets/icons/fighter/overload.png")
          .setMaxLevel(10)
          .setDesc(
            "Grants a temporary damage bonus to your Melee Potency and reduces your Max HP. This skill can only be used with a Main Class."
          )
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
          "/assets/icons/fighter/valiant_stance.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a bonus to damage dealt from the front side of an enemy while Valiant Stance is active."
          )
      )
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "Valiant Critical",
          "/assets/icons/fighter/valiant_stance.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Increases the critical hit rate when dealing damage from the front side of an enemy while Valiant Stance is active."
          )
      )
      .setSkill(
        8,
        3,
        new Skill(
          "32",
          "Wise Stance Up",
          "/assets/icons/fighter/wise_stance_alt.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a bonus to damage dealt from behind an enemy while Wise Stance is active."
          )
      )
      .setSkill(
        8,
        4,
        new Skill(
          "33",
          "Wise Critical",
          "/assets/icons/fighter/wise_stance_alt.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Increases the critical hit rate when dealing from behind an enemy while Wise Stance is active."
          )
      )
      .setSkill(
        8,
        5,
        new Skill(
          "34",
          "Combo Var. P. Atk PP Save",
          "/assets/icons/fighter/combo_atk_pp_save.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Reduces you PP consumption when you perform a Perfect Attack while stringing together different Photon Arts and Techniques."
          )
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
          "/assets/icons/fighter/valiant_stance.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Passive Stance skill that increases the damage you deal from the front side of an enemy."
          )
      )
      .setSkill(
        7,
        3,
        new Skill("27", "Wise Stance", "/assets/icons/fighter/wise_stance.png")
          .setMaxLevel(10)
          .setDesc(
            "Active Stance skill that increases the damage you deal from behind an enemy. Renders Valiant Stance ineffective."
          )
      )
      .setSkill(
        7,
        4,
        new Skill("28", "Adrenaline", "/assets/icons/fighter/adrenaline.png")
          .setMaxLevel(1)
          .setDesc(
            "Increases the effect duration of each Shifta or Deband you receive."
          )
      )
      .setSkill(
        7,
        5,
        new Skill(
          "29",
          "Tech Arts Perf. Atk",
          "/assets/icons/fighter/tech_art_atk_bonus.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus when you perform a Perfect Attack while stringing together different Photon Arts and Techniques."
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
          "Double Saber Wind Parry",
          "/assets/icons/fighter/double_saber_parry.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Allows you to perform a Perfect Guard the instant you unleash a whirlwind attack with a Double Saber."
          )
      )
      .setSkill(
        6,
        2,
        new Skill(
          "24",
          "Twin Daggers Somersault",
          "/assets/icons/fighter/twin_dagger_somersault.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Allows you to move in any direction you choose while performing a spin with Twin Daggers."
          )
      )
      .setSkill(
        6,
        3,
        new Skill(
          "25",
          "Knuckles Focus Boost",
          "/assets/icons/fighter/knuckles_focus_boost.png"
        )
          .setMaxLevel(1)
          .setDesc("Increases your Knuckles Focus by a factor of two.")
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
          "/assets/icons/fighter/double_saber_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Charges Focus Gauge with each attack you land, then lets you use a Weapon Action to unleash a damaging wind, the power of which is based on the gauge charge."
          )
      )
      .setSkill(
        5,
        2,
        new Skill(
          "21",
          "Twin Daggers Focus",
          "/assets/icons/fighter/twin_datter_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Charges your Focus Gauge according to the number of jumps you perform and then boosts the potency of your Photon Arts accordingly."
          )
      )
      .setSkill(
        5,
        3,
        new Skill(
          "22",
          "Knuckles Focus",
          "/assets/icons/fighter/knuckles_focus.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Charges your Focus Gauge according to the number of attacks performed during a combo and then boosts your attack speed accordingly."
          )
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        4,
        1,
        new Skill("16", "Melee Power Up 3", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power. Produces a stronger effect than Melee Power Up 1."
          )
      )
      .setSkill(
        4,
        3,
        new Skill("17", "Critical Strike", "/assets/icons/shared/melee.png")
          .setMaxLevel(5)
          .setDesc(
            "Increases your critical hit rate and grants a critical damage bonus. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        4,
        4,
        new Skill(
          "18",
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
          "19",
          "Sidestep Strike",
          "/assets/icons/shared/sidestep_alt.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc("Allows you to attack while performing a Sidestep.")
      );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill("13", "Melee Power Up 2", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power. Produces a stronger effect than Melee Power Up 1."
          )
      )
      .setSkill(
        3,
        2,
        new Skill("14", "HP Up 2", "/assets/icons/shared/hp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max HP.")
      )
      .setSkill(
        3,
        5,
        new Skill(
          "15",
          "Sidestep Plus",
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
        1,
        new Skill("8", "Dexterity Up", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
      )
      .setSkill(
        2,
        2,
        new Skill("9", "HP Up 1", "/assets/icons/shared/hp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max HP.")
      )
      .setSkill(
        2,
        3,
        new Skill(
          "10",
          "Arms Enthusiast: Fighter",
          "/assets/icons/shared/arms_enthusiast.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Boosts the damage you deal when a weapon of Rarity 10 star or greater is equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        2,
        4,
        new Skill(
          "11",
          "Melee Defense Up",
          "/assets/icons/shared/melee_def.png"
        )
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Defense.")
      )
      .setSkill(
        2,
        5,
        new Skill("12", "Sidestep", "/assets/icons/shared/sidestep.png")
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
        new Skill("1", "Melee Power Up 1", "/assets/icons/shared/melee.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Power.")
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
          .setDesc("Jumping during a Dodge Action transitions you into a dash.")
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
