import HunterData from "./hunter-data";
import { Character } from "./character";
import BouncerData from "./bouncer-data";
import FighterData from "./fighter-data";

export default class MockData {
  static buildCharacterSkillTrees(): any {
    return {
      hunter: new Character("hunter", "Hunter", 0, HunterData.getSkillTree()),
      fighter: new Character(
        "fighter",
        "Fighter",
        1,
        FighterData.getSkillTree()
      ),
      ranger: new Character("ranger", "Ranger", 2, BouncerData.getSkillTree()),
      gunner: new Character("gunner", "Gunner", 3, BouncerData.getSkillTree()),
      force: new Character("force", "Force", 4, BouncerData.getSkillTree()),
      techter: new Character(
        "techter",
        "Techter",
        5,
        BouncerData.getSkillTree()
      ),
      braver: new Character("braver", "Braver", 6, BouncerData.getSkillTree()),
      bouncer: new Character(
        "bouncer",
        "Bouncer",
        7,
        BouncerData.getSkillTree()
      ),
      summoner: new Character(
        "summoner",
        "Summoner",
        8,
        BouncerData.getSkillTree()
      ),
    };
  }
}
