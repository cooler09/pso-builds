import { SkillType } from "./skill-type";

export class Skill {
  id: string;
  name: string;
  desc: string;
  imagePath: string;
  skillType: SkillType;
  parentId: string;
  parentLevelReq: number;
  currentLevel: number;
  maxLevel: number;
  constructor(id: string, name: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
    this.currentLevel = 0;
    this.maxLevel = 1;
    this.skillType = SkillType.Normal;
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
  setParentSkill(parentId: string, levelReq: number) {
    this.parentId = parentId;
    this.parentLevelReq = levelReq;
    return this;
  }
}
