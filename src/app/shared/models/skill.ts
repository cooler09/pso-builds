import { SkillType } from "./skill-type";
import { SkillDependency } from "./skill-dependency";

export class Skill {
  id: string;
  name: string;
  desc: string;
  imagePath: string;
  locked: boolean;
  parent: SkillDependency;
  skillType: SkillType;
  currentLevel: number;
  maxLevel: number;
  children: SkillDependency[];
  constructor(id: string, name: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
    this.currentLevel = 0;
    this.maxLevel = 1;
    this.skillType = SkillType.Normal;
    this.locked = false;
    this.children = [];
  }

  setParent(dependency: SkillDependency) {
    this.parent = dependency;
    return this;
  }
  setSkillType(type: SkillType) {
    this.skillType = type;
    if (type === SkillType.Passive) {
      this.maxLevel = 1;
      this.currentLevel = 1;
    }
    return this;
  }
  setMaxLevel(maxLevel: number) {
    this.maxLevel = maxLevel;
    return this;
  }
  setDesc(desc: string): Skill {
    this.desc = desc;
    return this;
  }
  setLocked(locked: boolean) {
    this.locked = locked;
    return this;
  }
  setChildren(children: SkillDependency[]) {
    this.children = children;
    return this;
  }
}
