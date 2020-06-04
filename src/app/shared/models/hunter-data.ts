import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillDependency } from "./skill-dependency";
import { SkillType } from "./skill-type";

export default class HunterData {
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(13);
    skillTree = skillTree
      .setSkill(
        0,
        0,
        new Skill("1", "HP Up 1", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Max HP.")
          .setChildren([new SkillDependency("13", 3)])
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/hp_up_1.png").setDesc(
          "Jumping during a Dodge Action transitions you into a dash."
        )
      )
      .setSkill(
        0,
        2,
        new Skill(
          "3",
          "First Arts Perfect Attack Addition",
          "/assets/icons/hp_up_1.png"
        ).setDesc(
          "Turns your first attack into a Perfect Attack. A cooldown is applied after activation. Doesn't affect Harmonizer attacks, pet attacks, or Techniques."
        )
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/hp_up_1.png").setDesc(
          "Allows you to perform a break-fall while in the air."
        )
      )
      .setSkill(
        0,
        4,
        new Skill(
          "5",
          "Perf. Recovery & ATK Combo",
          "/assets/icons/hp_up_1.png"
        ).setDesc("Makes Perfect-Attack timing apply after a Perfect Recovery.")
      )
      .setSkill(
        0,
        5,
        new Skill("6", "Double Jump", "/assets/icons/hp_up_1.png").setDesc(
          "Enables two-stage jumping."
        )
      )
      .setSkill(
        1,
        5,
        new Skill(
          "7",
          "Sidestep & Perf. ATK Combo",
          "/assets/icons/hp_up_1.png"
        )
          .setSkillType(SkillType.Passive)
          .setDesc("Makes Perfect-Attack timing apply during a Sidestep.")
      )
      .setSkill(
        2,
        1,
        new Skill("8", "Dexterity Up", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Dexterity.")
      )
      .setSkill(
        2,
        2,
        new Skill("9", "Melee Power Up 1", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Power.")
      )
      .setSkill(
        2,
        3,
        new Skill("10", "Arms Enthusiast: Hunter", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Boosts the damage you deal when a weapon of Rarity 10(Star) or greater is equipped. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        2,
        4,
        new Skill("11", "Guard", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to protect against enemy attacks by raising your weapon in front of you."
          )
      )
      .setSkill(
        2,
        5,
        new Skill("12", "Sidestep", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc("Swiftly move a short distance by moving in deftly.")
      )
      .setSkill(
        3,
        1,
        new Skill("13", "HP Up 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Max HP. Produces a stronger effect than HP Up 1."
          )
          .setLocked(true)
          .setParent(new SkillDependency("1", 3))
      )
      .setSkill(
        3,
        2,
        new Skill("14", "Melee Power Up 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power. Produces a stronger effect than Melee Power Up 1."
          )
      )
      .setSkill(
        3,
        3,
        new Skill(
          "15",
          "Hunter Focus Boost",
          "/assets/icons/hp_up_1.png"
        ).setDesc(
          "Grants a bonus to the rate of increase of the Focus Gauge of Hunter weapons during Fury Stance or Guard Stance. This skill can only be used with a Main Class."
        )
      )
      .setSkill(
        3,
        4,
        new Skill("16", "Perfect Guard", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Negates damage when you Guard just before getting hit by an enemy attack."
          )
      )
      .setSkill(
        3,
        5,
        new Skill("17", "Sidestep Plus", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc("Extends the duration of invulnerability during a Sidestep.")
      )
      .setSkill(
        4,
        1,
        new Skill("18", "HP Up 3", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Max HP. Produces a stronger effect than HP Up 2."
          )
      )
      .setSkill(
        4,
        2,
        new Skill("19", "Melee Power Up 3", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc(
            "Boosts your Melee Power. Produces a stronger effect than Melee Power Up 2."
          )
      )
      .setSkill(
        4,
        3,
        new Skill("20", "Charged Parry", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setDesc(
            "Allows you to perform a Perfect Guard when initiating charged Photon Arts with a Hunter weapon."
          )
      )
      .setSkill(
        4,
        4,
        new Skill("21", "Perfect Counter", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Attacks performed immediately after a successful Perfect Guard become Perfect Attacks."
          )
      )
      .setSkill(
        4,
        5,
        new Skill("22", "Sidestep Strike", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc("Allows you to attack while performing a Sidestep.")
      )
      .setSkill(
        5,
        1,
        new Skill("23", "Melee Defense Up", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setDesc("Boosts your Melee Defense.")
      )
      .setSkill(
        5,
        3,
        new Skill("24", "Perfect Guard PP Gain", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setDesc(
            "Recovers PP when you perform a successful Perfect Guard with a Hunter weapon. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        5,
        4,
        new Skill("25", "Healing Guard", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setDesc(
            "Recovers your HP and the HP of others in the vicinity when you perform a successful Perfect Guard."
          )
      )
      .setSkill(
        5,
        5,
        new Skill("26", "Perfect Recovery", "/assets/icons/hp_up_1.png")
          .setSkillType(SkillType.Passive)
          .setDesc(
            "Allows you to quickly jump up after being knocked back onto the ground."
          )
      )
      .setSkill(
        6,
        1,
        new Skill("27", "Sword Focus", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setDesc(
            "Alters your attack range, hit count, and charge speed by Photon-Art type when you charge up your Focus Gauge."
          )
      )
      .setSkill(
        6,
        2,
        new Skill("28", "Wired Lance Focus", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setDesc(
            "Alters your attack range, hit count, and charge speed by Photon-Art type when you charge up your Focus Gauge."
          )
      );
    return skillTree;
  }
}
