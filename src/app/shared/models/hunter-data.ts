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
          .setChildren([
            new SkillDependency("13", 3),
            new SkillDependency("27", 1),
            new SkillDependency("28", 1),
            new SkillDependency("29", 1),
            new SkillDependency("31", 5),
            new SkillDependency("32", 3),
            new SkillDependency("33", 3),
            new SkillDependency("34", 3),
          ])
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
          .setChildren([new SkillDependency("14", 3)])
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
          .setChildren([new SkillDependency("18", 3)])
      )
      .setSkill(
        3,
        2,
        new Skill("14", "Melee Power Up 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setLocked(true)
          .setParent(new SkillDependency("9", 3))
          .setDesc(
            "Boosts your Melee Power. Produces a stronger effect than Melee Power Up 1."
          )
          .setChildren([new SkillDependency("19", 3)])
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
          .setLocked(true)
          .setDesc(
            "Boosts your Max HP. Produces a stronger effect than HP Up 2."
          )
          .setParent(new SkillDependency("13", 3))
      )
      .setSkill(
        4,
        2,
        new Skill("19", "Melee Power Up 3", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setLocked(true)
          .setParent(new SkillDependency("14", 3))
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
          .setParent(new SkillDependency("1", 1))
          .setDesc(
            "Alters your attack range, hit count, and charge speed by Photon-Art type when you charge up your Focus Gauge."
          )
      )
      .setSkill(
        6,
        2,
        new Skill("28", "Wired Lance Focus", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setParent(new SkillDependency("1", 1))
          .setDesc(
            "Alters your attack range, hit count, and charge speed by Photon-Art type when you charge up your Focus Gauge."
          )
      )
      .setSkill(
        6,
        3,
        new Skill("29", "Partisan Focus", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setParent(new SkillDependency("1", 1))
          .setDesc(
            "Consumes one segment of your Focus Gauge to expand you attack range and increase your potency when using Photon Arts."
          )
      )
      .setSkill(
        6,
        4,
        new Skill("30", "All Guard", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setDesc(
            "Allows for Guard to be performed in all directions, with Hunter weapons only. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        7,
        0,
        new Skill("31", "Perfect Attack Bonus 1", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("1", 5))
          .setDesc("Grants a damage bonus to non-Technique Perfect Attacks.")
          .setChildren([
            new SkillDependency("38", 3),
            new SkillDependency("39", 3),
          ])
      )
      .setSkill(
        7,
        2,
        new Skill("32", "Guard Stance", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("1", 3))
          .setDesc(
            "Active Stance skill that reduces the melee and ranged damage you deal while also reducing the level of melee damage you take. Renders Fury Stance ineffective."
          )
          .setChildren([
            new SkillDependency("35", 3),
            new SkillDependency("40", 3),
            new SkillDependency("41", 3),
            new SkillDependency("42", 3),
            new SkillDependency("44", 3),
            new SkillDependency("45", 3),
          ])
      )
      .setSkill(
        7,
        4,
        new Skill("33", "War Cry", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("1", 3))
          .setDesc("Draws the enemy's attention to you.")
          .setChildren([new SkillDependency("36", 3)])
      )
      .setSkill(
        7,
        5,
        new Skill("34", "Iron Will", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("1", 3))
          .setDesc(
            "Adds a chance of retaining 1 HP when you suffer damage that would have otherwise incapacitated you. Renders you invicible for a short time when activated."
          )
          .setChildren([new SkillDependency("37", 2)])
      )
      .setSkill(
        8,
        3,
        new Skill("35", "Guard Stance Up", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("32", 3))
          .setDesc("Boosts your Melee Resistance while Guard Stance is in use.")
      )
      .setSkill(
        8,
        4,
        new Skill("36", "War Brave", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setParent(new SkillDependency("33", 3))
          .setDesc(
            "Recovers PP according to number of enemies targeted and grants a 60-second damage bonus when War Cry is active. This skill can only be used with a Main Class."
          )
      )
      .setSkill(
        8,
        5,
        new Skill("37", "Stalwart Spirit", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("34", 2))
          .setDesc(
            "Ups Melee Power for 60 seconds after using Iron Will, and extends invulnerability. Raising the skill level boosts Melee Power and extends invulnerability even more."
          )
      )
      .setSkill(
        9,
        0,
        new Skill("38", "Fury Stance", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("31", 3))
          .setDesc(
            "Passive Stance skill that boosts the melee and ranged attack damage you deal to enemies while also increasing the melee damage you take."
          )
          .setChildren([
            new SkillDependency("43", 5),
            new SkillDependency("47", 5),
            new SkillDependency("52", 5),
            new SkillDependency("53", 5),
          ])
      )
      .setSkill(
        9,
        1,
        new Skill("39", "Perfect Attack Bonus 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("31", 3))
          .setDesc("Grants a damage bonus to non-Technique Perfect Attacks.")
      )
      .setSkill(
        9,
        3,
        new Skill("40", "Absorption", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("32", 3))
          .setDesc(
            "Restores HP when an enemy dies within a fixed range while Guard Stance is active."
          )
      )
      .setSkill(
        9,
        4,
        new Skill("41", "Auto-Mate Half", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("32", 3))
          .setDesc(
            "Automatically uses a '-mate' item when you HP falls below 50%."
          )
      )
      .setSkill(
        9,
        5,
        new Skill("42", "Guard Stance Poison", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setParent(new SkillDependency("32", 1))
          .setDesc("Heals status ailment Poison when Guard Stance is in use.")
          .setChildren([new SkillDependency("46", 1)])
      )
      .setSkill(
        10,
        1,
        new Skill("43", "Critical Fury", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("38", 5))
          .setDesc("Boosts your critcal hit rate while using Fury Stance.")
      )
      .setSkill(
        10,
        2,
        new Skill("44", "Flash Guard 1", "/assets/icons/hp_up_1.png")
          .setParent(new SkillDependency("32", 3))
          .setMaxLevel(10)
          .setDesc("Decreases melee and ranged damage.")
          .setChildren([
            new SkillDependency("48", 5),
            new SkillDependency("49", 5),
            new SkillDependency("50", 3),
          ])
      )
      .setSkill(
        10,
        3,
        new Skill("45", "Advanced Guard Stance", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("32", 3))
          .setDesc(
            "Grants a damage bonus for a set time when you perform a successful Perfect Guard while Guard Stance is active. This skill can only be used with a Main Class. "
          )
      )
      .setSkill(
        10,
        5,
        new Skill("46", "Guard Stance Burn", "/assets/icons/hp_up_1.png")
          .setMaxLevel(1)
          .setParent(new SkillDependency("42", 1))
          .setDesc("Heals status ailment Burn when Guard Stance is in use.")
          .setChildren([new SkillDependency("51", 1)])
      )
      .setSkill(
        11,
        1,
        new Skill("47", "Perfect Fury Bonus", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("38", 5))
          .setDesc(
            "Grants a damage bonus every time you perform a successful Perfect Attack while Fury Stance is active. The maximum damage bonus is 10%."
          )
      )
      .setSkill(
        11,
        2,
        new Skill("48", "Flash Guard 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("44", 5))
          .setDesc("Decreases melee and ranged damage.")
      )
      .setSkill(
        11,
        3,
        new Skill("49", "Flash Tech Guard", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("44", 5))
          .setDesc("Decreases Technique damage.")
      )
      .setSkill(
        11,
        4,
        new Skill("50", "Hunter Physique", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("44", 3))
          .setDesc(
            "Reduces damage and prevents you from being launched into the air or knocked back."
          )
      )
      .setSkill(
        11,
        5,
        new Skill("51", "Not Bad", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("46", 1))
          .setDesc("Reduces the duration of status ailments affecting you.")
      )
      .setSkill(
        12,
        0,
        new Skill("52", "Fury Stance Up 1", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("38", 5))
          .setDesc(
            "Boosts the melee and ranged attack damage that you deal to enemies while using Fury Stance."
          )
      )
      .setSkill(
        12,
        1,
        new Skill("53", "Fury Stance Up 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(5)
          .setParent(new SkillDependency("38", 5))
          .setDesc(
            "Boosts the melee and ranged attack damage that you deal to enemies while using Fury Stance."
          )
      );
    return skillTree;
  }
}
