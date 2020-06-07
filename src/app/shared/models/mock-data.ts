import HunterData from "./hunter-data";
import { Character } from "./character";
import BouncerData from "./bouncer-data";

export default class MockData {
  static buildCharacterSkillTrees(): any {
    return {
      hunter: new Character("hunter", "Hunter", HunterData.getSkillTree()),
      fighter: new Character("fighter", "Fighter", BouncerData.getSkillTree()),
      ranger: new Character("ranger", "Ranger", BouncerData.getSkillTree()),
      gunner: new Character("gunner", "Gunner", BouncerData.getSkillTree()),
      force: new Character("force", "Force", BouncerData.getSkillTree()),
      techter: new Character("techter", "Techter", BouncerData.getSkillTree()),
      braver: new Character("braver", "Braver", BouncerData.getSkillTree()),
      bouncer: new Character("bouncer", "Bouncer", BouncerData.getSkillTree()),
      summoner: new Character(
        "summoner",
        "Summoner",
        BouncerData.getSkillTree()
      ),
    };
  }
}
