import { SkillTree } from "../skill-tree";
import { Skill } from "../skill";
import { SkillType } from "../skill-type";

export default class SummonerData {
  static setDependencies(skillTree: SkillTree) {
    skillTree.setDependency("1", "11", 1);
    skillTree.setDependency("1", "12", 1);
    skillTree.setDependency("1", "14", 1);
    skillTree.setDependency("14", "15", 1);
    skillTree.setDependency("14", "16", 1);
    skillTree.setDependency("14", "17", 1);
    skillTree.setDependency("15", "18", 5);
    skillTree.setDependency("15", "19", 1);
    skillTree.setDependency("18", "20", 3);
    skillTree.setDependency("18", "21", 1);
    skillTree.setDependency("18", "22", 1);
    skillTree.setDependency("18", "23", 1);
    skillTree.setDependency("18", "24", 1);
    skillTree.setDependency("20", "25", 5);
    skillTree.setDependency("20", "26", 1);
    skillTree.setDependency("25", "27", 3);
    skillTree.setDependency("25", "28", 3);
    skillTree.setDependency("25", "29", 3);
    skillTree.setDependency("28", "30", 3);
    skillTree.setDependency("28", "31", 3);
    skillTree.setDependency("28", "32", 3);
    skillTree.setDependency("28", "33", 3);
    skillTree.setDependency("28", "34", 3);
    skillTree.setDependency("28", "35", 3);
    skillTree.setDependency("28", "39", 3);
    skillTree.setDependency("28", "40", 3);
    skillTree.setDependency("32", "36", 3);
    skillTree.setDependency("33", "37", 3);
    skillTree.setDependency("34", "38", 3);
  }
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(15);
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

    SummonerData.setDependencies(skillTree);

    return skillTree;
  }
  static loadRowFifteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        14,
        0,
        new Skill(
          "39",
          "Advanced Photon Blast",
          "/assets/icons/summoner/adv_photon_blast.png"
        )
          .setMaxLevel(5)
          .setDesc("Boosts Photon Blast damage.")
      )
      .setSkill(
        14,
        1,
        new Skill("40", "Alter Ego", "/assets/icons/summoner/alter_ego.png")
          .setMaxLevel(10)
          .setDesc(
            "Grants a damage bonus for a set time in exchange for the player also taking damage whenever a pet takes damage. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowFourteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        13,
        1,
        new Skill("35", "HP Mega-Up", "/assets/icons/shared/hp.png")
          .setMaxLevel(10)
          .setDesc("Greatly boosts your Max HP.")
      )
      .setSkill(
        13,
        2,
        new Skill("36", "PP Up 2", "/assets/icons/shared/pp.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max PP.")
      )
      .setSkill(
        13,
        3,
        new Skill(
          "37",
          "Total Attack Mega-Up",
          "/assets/icons/shared/all_atk.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Greatly boosts your Melee Power, Ranged Power, and Technique Power."
          )
      )
      .setSkill(
        13,
        4,
        new Skill(
          "38",
          "Total Def/Dex Mega-Up",
          "/assets/icons/shared/total_def.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Greatly boosts your Melee Defense, Ranged Defense, and Technique Defense, as well as your Dexterity."
          )
      );
  }
  static loadRowThirteen(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        12,
        2,
        new Skill("32", "PP Up 1", "/assets/icons/shared/pp.png")
          .setMaxLevel(5)
          .setDesc("Boosts your Max PP.")
      )
      .setSkill(
        12,
        3,
        new Skill("33", "Total Attack Up", "/assets/icons/shared/all_atk.png")
          .setMaxLevel(5)
          .setDesc(
            "Boosts your Melee Power, Ranged Power, and Technique Power."
          )
      )
      .setSkill(
        12,
        4,
        new Skill(
          "34",
          "Total Def/Dex Up",
          "/assets/icons/shared/total_def.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts your Melee Defense, Ranged Defense, and Technique Defense, as well as your Dexterity."
          )
      );
  }
  static loadRowTwelve(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        11,
        1,
        new Skill(
          "30",
          "Pet Elemental Precision Hit",
          "/assets/icons/summoner/per_ele_precision_hit.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts damage dealt when exploiting an Elemental Weakness. Greatly boosts the damage dealt by a pet."
          )
      )
      .setSkill(
        11,
        2,
        new Skill(
          "31",
          "Pet Elemental PP Restorate",
          "/assets/icons/summoner/per_ele_pp_restorate.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Boosts PP recovery when a pet hits the enemy with a Normal Attack that exploits the latter's Elemental Weakness. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowEleven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        10,
        0,
        new Skill(
          "28",
          "Pet Recovery",
          "/assets/icons/summoner/pet_recovery.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Allows deployed pets to gradually recover their HP. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        10,
        1,
        new Skill(
          "29",
          "Reserve Recovery",
          "/assets/icons/summoner/reserve_recovery.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Boosts the rate of recovery of pets that aren't equipped and are included in the Weapon Palette."
          )
      );
  }
  static loadRowTen(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      9,
      1,
      new Skill(
        "27",
        "Enhanced Mark",
        "/assets/icons/summoner/enhanced_mark.png"
      )
        .setMaxLevel(1)
        .setDesc(
          "Boosts damage you deal to any area of an enemy that has a Summoner's Mark attached."
        )
    );
  }
  static loadRowNine(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        8,
        0,
        new Skill(
          "25",
          "Summoner's Mark",
          "/assets/icons/summoner/summoners_mark.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Confers a marker that increases the damage dealt to enemies by you and your pet."
          )
      )
      .setSkill(
        8,
        1,
        new Skill(
          "26",
          "Pet Photon Barrier",
          "/assets/icons/summoner/pet_photon_barrier.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Gives a set probability of neutralizing damage sustained by a pet. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        7,
        0,
        new Skill(
          "20",
          "All Attack Bonus 2",
          "/assets/icons/shared/all_atk.png"
        )
          .setMaxLevel(5)
          .setDesc("Grants a bonus to damage dealt by the player and pets.")
      )
      .setSkill(
        7,
        1,
        new Skill("21", "Harmonize Up", "/assets/icons/summoner/harmonize.png")
          .setMaxLevel(5)
          .setDesc(
            "Boosts the probability of Pet Sympathy signs emerging. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        7,
        2,
        new Skill("22", "Sympathy Time", "/assets/icons/summoner/harmonize.png")
          .setMaxLevel(5)
          .setDesc(
            "Extends the Pet Sympathy effect duration. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        7,
        3,
        new Skill("23", "Easy Sympathy", "/assets/icons/summoner/harmonize.png")
          .setMaxLevel(1)
          .setDesc(
            "Extends the receptive period of Pet Sympathy. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        7,
        4,
        new Skill(
          "24",
          "Love Distance Love",
          "/assets/icons/summoner/long_distance_love.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Allows Shifta and Resta requested by your pet to remain in effect even when your pet leaves your side. This skill can only be used with a Main Class."
          )
      );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        6,
        0,
        new Skill(
          "18",
          "Pet Sympathy",
          "/assets/icons/summoner/pet_sympathy.png"
        )
          .setMaxLevel(10)
          .setDesc(
            "Boosts pet recovery and damage dealt for a set time when you respond to a request by your pet for Shifta or Resta. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        6,
        1,
        new Skill("19", "Dia Master", "/assets/icons/summoner/dia_master.png")
          .setMaxLevel(5)
          .setDesc(
            "Adds a chance of incapacitating damage being taken by your pet instead. A period of invulnerability occurs after activation. Can only be used with a Main Class."
          )
      );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        0,
        new Skill(
          "15",
          "All Attack Bonus 1",
          "/assets/icons/shared/all_atk.png"
        )
          .setMaxLevel(5)
          .setDesc("Grants a bonus to damage dealt by the players and pets.")
      )
      .setSkill(
        5,
        1,
        new Skill(
          "16",
          "Quick Recovery",
          "/assets/icons/summoner/quick_recovery.png"
        )
          .setMaxLevel(5)
          .setDesc(
            "Reduces the duration of your Jellen, Blight Rounds, and status ailments."
          )
      )
      .setSkill(
        5,
        2,
        new Skill(
          "17",
          "Unstoppable Recovery",
          "/assets/icons/summoner/unstoppable_recovery.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Eliminates recoil and reduces damage taken when you use a Recovery Item."
          )
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      4,
      0,
      new Skill("14", "HP Restorate", "/assets/icons/summoner/hp_restorate.png")
        .setMaxLevel(10)
        .setDesc(
          "Causes you to recover HP gradually when your HP falls below a certain threshold."
        )
    );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill(
          "11",
          "Pet Switch Strike",
          "/assets/icons/summoner/pet_switch_strike.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Converts your pet's attacks so that they're carried out with Melee Power. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        3,
        2,
        new Skill(
          "12",
          "Pet Switch Shot",
          "/assets/icons/summoner/pet_switch_shot.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "Converts your pet's attacks so that they're carried out with Ranged Power. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        3,
        5,
        new Skill(
          "13",
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
        3,
        new Skill(
          "8",
          "Assist Share",
          "/assets/icons/summoner/assist_share.png"
        )
          .setMaxLevel(1)
          .setDesc(
            "When you switch pets, allows the pet you switch to inherit Pet Sympathy effects, as well as other effects such as Shifta and Deband. Main Class only."
          )
      )
      .setSkill(
        2,
        4,
        new Skill(
          "9",
          "Sub-Class Growth Up",
          "/assets/icons/summoner/sub_class_growth.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Grants a double bonus to EXP earned by your selected Sub-Class during a quest. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        2,
        5,
        new Skill(
          "10",
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
        new Skill("1", "HP Up", "/assets/icons/shared/hp.png")
          .setMaxLevel(5)
          .setDesc("Boosts your Max HP.")
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
