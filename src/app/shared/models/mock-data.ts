import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillDependency } from "./skill-dependency";
import { SkillType } from "./skill-type";

export default class MockData {
  static buildClasses(): any[] {
    return [
      {
        value: "hunter",
        viewValue: "Hunter",
      },
      {
        value: "fighter",
        viewValue: "Fighter",
      },
      {
        value: "ranger",
        viewValue: "Ranger",
      },
      {
        value: "gunner",
        viewValue: "Gunner",
      },
      {
        value: "force",
        viewValue: "Force",
      },
      {
        value: "techter",
        viewValue: "Techter",
      },
      {
        value: "braver",
        viewValue: "Braver",
      },
      {
        value: "bouncer",
        viewValue: "Bouncer",
      },
      {
        value: "summoner",
        viewValue: "Summoner",
      },
    ];
  }
  static buildSkillTree(): SkillTree {
    let skillTree = new SkillTree(4);
    console.log(skillTree);
    skillTree = skillTree
      .setSkill(
        0,
        0,
        new Skill("1", "HP Up 1", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setChildren([new SkillDependency("13", 3)])
      )
      .setSkill(0, 1, new Skill("2", "HP Up 1", "/assets/icons/hp_up_1.png"))
      .setSkill(0, 2, new Skill("3", "HP Up 1", "/assets/icons/hp_up_1.png"))
      .setSkill(0, 3, new Skill("4", "HP Up 1", "/assets/icons/hp_up_1.png"))
      .setSkill(0, 4, new Skill("5", "HP Up 1", "/assets/icons/hp_up_1.png"))
      .setSkill(0, 5, new Skill("6", "HP Up 1", "/assets/icons/hp_up_1.png"))
      .setSkill(
        1,
        5,
        new Skill("7", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
          SkillType.Passive
        )
      )
      .setSkill(
        2,
        1,
        new Skill("8", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10)
      )
      .setSkill(
        2,
        2,
        new Skill("9", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10)
      )
      .setSkill(
        2,
        3,
        new Skill("10", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
          SkillType.Passive
        )
      )
      .setSkill(
        2,
        4,
        new Skill("11", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
          SkillType.Passive
        )
      )
      .setSkill(
        2,
        5,
        new Skill("12", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
          SkillType.Passive
        )
      )
      .setSkill(
        3,
        1,
        new Skill("13", "HP Up 2", "/assets/icons/hp_up_1.png")
          .setMaxLevel(10)
          .setLocked(true)
          .setParent(new SkillDependency("1", 3))
      )
      .setSkill(
        3,
        2,
        new Skill("14", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10)
      )
      .setSkill(3, 3, new Skill("15", "HP Up 1", "/assets/icons/hp_up_1.png"))
      .setSkill(
        3,
        4,
        new Skill("16", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
          SkillType.Passive
        )
      )
      .setSkill(
        3,
        5,
        new Skill("17", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10)
      );
    return skillTree;
  }
}
