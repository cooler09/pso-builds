import { SkillType } from "./skill-type";
import { SkillDependency } from "./skill-dependency";
import { SkillMin } from "./skill-min";

export class Skill {
  id: string;
  name: string;
  desc: string;
  imagePath: string;
  levelReq: number;
  locked: boolean;
  parent: SkillDependency;
  skillType: SkillType;
  currentLevel: number;
  maxLevel: number;
  children: SkillDependency[];
  constructor(id: string, name: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.desc = "";
    this.imagePath = imagePath;
    this.currentLevel = 0;
    this.maxLevel = 1;
    this.skillType = SkillType.Normal;
    this.locked = false;
    this.children = [];
  }
  setLevelReq(level: number) {
    this.levelReq = level;
    return this;
  }
  setParent(dependency: SkillDependency) {
    this.locked = true;
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
  simplifyModel(): SkillMin {
    let model = new SkillMin();
    model.c = this.currentLevel;
    model.l = this.locked;

    return model;
  }
  setMinData(minData: SkillMin) {
    this.currentLevel = minData.c;
    this.locked = minData.l;
  }
}
