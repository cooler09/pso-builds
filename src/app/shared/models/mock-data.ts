import { SkillTree } from "./skill-tree";
import { Skill } from "./skill";
import { SkillDependency } from "./skill-dependency";
import { SkillType } from "./skill-type";
import HunterData from "./hunter-data";

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
    return HunterData.getSkillTree();
  }
}
