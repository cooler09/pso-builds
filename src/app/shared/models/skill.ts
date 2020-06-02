export class Skill {
  id: string;
  name: string;
  desc: string;
  imagePath: string;
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
