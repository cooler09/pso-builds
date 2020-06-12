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
          "/assets/icons/ranger/percision_hit_blast_bonus.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Grants a bonus to the rate of increase of your PB Gauge when you attack an enemy's weak point with a ranged attack."
          )
      )
      .setSkill(
        11,
        1,
        new Skill(
          "44",
          "Stationary Fire 2",
          "/assets/icons/ranger/stationary_fire.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts the damage you deal when performing a ranged attack while stationary."
          )
      )
      .setSkill(
        11,
        3,
        new Skill(
          "45",
          "PP Preservation Bullet",
          "/assets/icons/ranger/pp_preservation_bullet.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Reduces PP consumption of Photon Arts and Techniques when you have a weapon equipped that is loaded with special rounds."
          )
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
          "/assets/icons/ranger/adv_precision_hit.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts damage dealt when attacking the enemy's weak point using a ranged attack."
          )
      )
      .setSkill(
        10,
        1,
        new Skill(
          "38",
          "Stationary Fire 1",
          "/assets/icons/ranger/stationary_fire.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts the damage you deal when performing a ranged attack while stationary."
          )
      )
      .setSkill(
        10,
        2,
        new Skill("39", "Mobile Fire", "/assets/icons/ranger/mobile_fire.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts damage you deal when performing a ranged attack while in motion."
          )
      )
      .setSkill(
        10,
        3,
        new Skill("40", "Power Bullet", "/assets/icons/ranger/power_bullet.png")
          .setMaxLevel(5)
          .setDesc(
            "Boosts you Ranged Power for a set time when your weapon is loaded with special rounds."
          )
      )
      .setSkill(
        10,
        4,
        new Skill(
          "41",
          "Ammo Maintenance",
          "/assets/icons/ranger/ammo_maintenance.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Rounds will no longer disappear when switching to other weapons while special rounds are loaded. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        10,
        5,
        new Skill(
          "42",
          "Massive Bullet",
          "/assets/icons/ranger/massive_bullet.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Prevents you from being launched into the air or blown back while special rounds are loaded. This skill can only be used with a Main Class."
          )
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
          "/assets/icons/ranger/blight_round.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Assault Rifle only. Loads your weapon with debilitating rounds that lower enemy Defense."
          )
      )
      .setSkill(
        9,
        2,
        new Skill("33", "Bind Bullet", "/assets/icons/ranger/bind_bullet.png")
          .setMaxLevel(5)
          .setDesc(
            "Assault Rifle only. Loads your weapon with debilitating rounds that provide a binding effect."
          )
      )
      .setSkill(
        9,
        3,
        new Skill(
          "34",
          "Blinding Shot",
          "/assets/icons/ranger/blinding_shot.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Launcher only. Loads your weapon with blinding rounds that provide a blinding effect."
          )
      )
      .setSkill(
        9,
        4,
        new Skill("35", "Panic Shot", "/assets/icons/ranger/panic_shot.png")
          .setMaxLevel(5)
          .setDesc(
            "Launcher only.Loads your weapon with panic rounds that provide a panic effect."
          )
      )
      .setSkill(
        9,
        5,
        new Skill("36", "Jellen Shot", "/assets/icons/ranger/jellen_shot.png")
          .setMaxLevel(10)
          .setDesc(
            "Launcher only. Loads your weapon with Jellen rounds that lower enemy Attack."
          )
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
          "/assets/icons/ranger/adv_precision_hit.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts damage dealt when attacking the enemy's weak point using a ranged attack."
          )
      )
      .setSkill(
        8,
        1,
        new Skill("30", "First Hit", "/assets/icons/shared/ranged.png")
          .setMaxLevel(5)
          .setDesc(
            "Grants a damage bonus when you perform an attack on an enemy while the enemy has full HP."
          )
      )
      .setSkill(
        8,
        2,
        new Skill(
          "31",
          "Eradication Bonus",
          "/assets/icons/ranger/eradication_bonus.png"
        )
          .setMaxLevel(10)
          .setDesc("Restores PP when an enemy dies within a fixed range.")
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
          "/assets/icons/ranger/spring_trap_alt.png"
        )
          .setMaxLevel(1)
          .setDesc("Boosts the potency of Spring Traps.")
      )
      .setSkill(
        7,
        4,
        new Skill(
          "27",
          "Custom Poison Trap",
          "/assets/icons/ranger/poison_trap_alt.png"
        )
          .setMaxLevel(1)
          .setDesc("Increases the poisoning rate of Poison Traps.")
      )
      .setSkill(
        7,
        5,
        new Skill(
          "28",
          "Tactical Trap",
          "/assets/icons/ranger/tactical_trap.png"
        )
          .setMaxLevel(5)
          .setDesc("Restores PP when you inflict damage using a trap.")
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        1,
        new Skill("21", "Stun Grenade", "/assets/icons/ranger/stun_grenade.png")
          .setMaxLevel(1)
          .setDesc(
            "Lobs a flash grenade that stuns enemies. Won't affect enemies that are immune to stunning."
          )
      )
      .setSkill(
        6,
        2,
        new Skill("22", "Gravity Bomb", "/assets/icons/ranger/gravity_bomb.png")
          .setMaxLevel(1)
          .setDesc("Lobs a specialized bomb that attracts surrounding enemies.")
      )
      .setSkill(
        6,
        3,
        new Skill("23", "Spring Trap", "/assets/icons/ranger/spring_trap.png")
          .setMaxLevel(1)
          .setDesc("Sets a trap that launches enemies into the air.")
      )
      .setSkill(
        6,
        4,
        new Skill("24", "Poison Trap", "/assets/icons/ranger/poison_trap.png")
          .setMaxLevel(1)
          .setDesc("Sets a Poison Trap.")
      )
      .setSkill(
        6,
        5,
        new Skill("25", "Tool Mastery", "/assets/icons/ranger/tool_mastery.png")
          .setMaxLevel(10)
          .setDesc("Increases the potency of tool skills.")
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
          "/assets/icons/shared/sidestep_alt_blue.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "A Dive Roll Shot that's performed while special rounds are loaded becomes a Normal Attack."
          )
      )
      .setSkill(
        5,
        5,
        new Skill(
          "20",
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
        new Skill("17", "Dexterity Up 3", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Dexterity. Produces a stronger effect than Dexterity Up 2."
          )
      )
      .setSkill(
        4,
        5,
        new Skill(
          "18",
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
        new Skill("12", "Dexterity Up 2", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Dexterity. Produces a stronger effect than Dexterity Up 1."
          )
      )
      .setSkill(
        3,
        2,
        new Skill("13", "Ranged PWR Up 2", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Ranged Power. Produces a stronger effect than Ranged Power Up 1."
          )
      )
      .setSkill(
        3,
        3,
        new Skill("14", "Trap Search", "/assets/icons/ranger/trap_search.png")
          .setSkillType(SkillType.Passive)
          .setDesc("Allows you to find hidden traps.")
      )
      .setSkill(
        3,
        4,
        new Skill(
          "15",
          "Sharp Shooter",
          "/assets/icons/ranger/sharp_shooter.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts damage dealt when you hit an enemy with an attack at long range. This skill can only be used with a Main Class."
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
        new Skill("8", "Ranged PWR Up 1", "/assets/icons/shared/ranged.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Ranged Power.")
      )
      .setSkill(
        2,
        3,
        new Skill("9", "Ranged DEF Up", "/assets/icons/shared/ranged_def.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Ranged Defense.")
      )
      .setSkill(
        2,
        4,
        new Skill(
          "10",
          "Arms Enthusiast: Ranger",
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
        new Skill("1", "Dexterity Up 1", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
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
