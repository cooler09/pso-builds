import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillDependency } from "./skill-dependency";
import { SkillType } from "./skill-type";

export default class BouncerData {
  static getSkillTree(): SkillTree {
    let skillTree = new SkillTree(13);
    skillTree = this.loadRowOne(skillTree);
    skillTree = this.loadRowTwo(skillTree);
    skillTree = this.loadRowThree(skillTree);
    skillTree = this.loadRowFour(skillTree);
    skillTree = this.loadRowFive(skillTree);
    skillTree = this.loadRowSix(skillTree);
    skillTree = this.loadRowSeven(skillTree);
    skillTree = this.loadRowEight(skillTree);

    return skillTree;
  }
  static loadRowEight(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      6,
      1,
      new Skill(
        "21",
        "Jet Boots Focus Boost",
        "/assets/icons/shared/cannot.png"
      )
        .setParent(new SkillDependency("15", 1))
        .setMaxLevel(1)
    );
  }
  static loadRowSeven(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      6,
      1,
      new Skill(
        "20",
        "Jet Boots Focus Boost",
        "/assets/icons/shared/cannot.png"
      )
        .setParent(new SkillDependency("15", 1))
        .setMaxLevel(1)
    );
  }
  static loadRowSix(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        5,
        1,
        new Skill("15", "Jet Boots Focus", "/assets/icons/shared/cannot.png")
          .setParent(new SkillDependency("1", 1))
          .setMaxLevel(1)
          .setChildren([new SkillDependency("20", 1)])
      )
      .setSkill(
        5,
        2,
        new Skill("16", "Jet Boots Escape", "/assets/icons/shared/cannot.png")
          .setParent(new SkillDependency("1", 3))
          .setMaxLevel(5)
      )
      .setSkill(
        5,
        3,
        new Skill("17", "Encore Jump", "/assets/icons/shared/cannot.png")
          .setParent(new SkillDependency("1", 3))
          .setMaxLevel(1)
      )
      .setSkill(
        5,
        4,
        new Skill(
          "18",
          "Soaring Blades Focus",
          "/assets/icons/shared/cannot.png"
        )
          .setParent(new SkillDependency("1", 1))
          .setMaxLevel(1)
      )
      .setSkill(
        5,
        5,
        new Skill("19", "Dodge Attack", "/assets/icons/shared/cannot.png")
          .setSkillType(SkillType.Passive)
          .setChildren([])
      );
  }
  static loadRowFive(skillTree: SkillTree): SkillTree {
    return skillTree.setSkill(
      4,
      1,
      new Skill("14", "Melee Power Up 2", "/assets/icons/shared/cannot.png")
        .setParent(new SkillDependency("10", 3))
        .setMaxLevel(10)
    );
  }
  static loadRowFour(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        3,
        1,
        new Skill("10", "Melee Power Up 1", "/assets/icons/shared/cannot.png")
          .setParent(new SkillDependency("1", 3))
          .setMaxLevel(10)
          .setChildren([new SkillDependency("14", 3)])
      )
      .setSkill(
        3,
        2,
        new Skill("11", "Tech. Power Up", "/assets/icons/shared/cannot.png")
          .setParent(new SkillDependency("1", 3))
          .setMaxLevel(10)
      )
      .setSkill(
        3,
        4,
        new Skill(
          "12",
          "Bouncer Mag",
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        3,
        5,
        new Skill("13", "Advanced Dodge", "/assets/icons/shared/cannot.png")
          .setMaxLevel(10)
          .setParent(new SkillDependency("9", 1))
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
          "/assets/icons/shared/cannot.png"
        ).setSkillType(SkillType.Passive)
      )
      .setSkill(
        2,
        5,
        new Skill("9", "Binding Sidestep", "/assets/icons/shared/sidestep.png")
          .setSkillType(SkillType.Passive)
          .setChildren([new SkillDependency("13", 1)])
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
      ).setSkillType(SkillType.Passive)
    );
  }
  static loadRowOne(skillTree: SkillTree): SkillTree {
    return skillTree
      .setSkill(
        0,
        0,
        new Skill("1", "Dexterity Up", "/assets/icons/shared/dex.png")
          .setMaxLevel(10)
          .setChildren([
            new SkillDependency("10", 3),
            new SkillDependency("11", 3),
          ])
      )
      .setSkill(
        0,
        1,
        new Skill("2", "Sidestep Jump", "/assets/icons/shared/sidestep_alt.png")
          .setDesc("Jumping during a Dodge Action transitions you into a dash.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(10)
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
      )
      .setSkill(
        0,
        3,
        new Skill("4", "Air Reversal", "/assets/icons/shared/double_jump.png")
          .setDesc("Allows you to perform a break-fall while in the air.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(30)
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
      )
      .setSkill(
        0,
        5,
        new Skill("6", "Double Jump", "/assets/icons/shared/double_jump.png")
          .setDesc("Enables two-stage jumping.")
          .setSkillType(SkillType.LevelReq)
          .setLevelReq(40)
      );
  }
}
