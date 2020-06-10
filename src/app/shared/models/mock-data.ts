import HunterData from "./hunter-data";
import { Character } from "./character";
import BouncerData from "./bouncer-data";
import FighterData from "./fighter-data";
import RangerData from "./ranger-data";
import GunnerData from "./gunner-data";
import ForceData from "./force-data";
import TechterData from "./techter-data";
import BraverData from "./braver-data";
import SummonerData from "./summoner-data";

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
      ranger: new Character("ranger", "Ranger", 2, RangerData.getSkillTree()),
      gunner: new Character("gunner", "Gunner", 3, GunnerData.getSkillTree()),
      force: new Character("force", "Force", 4, ForceData.getSkillTree()),
      techter: new Character(
        "techter",
        "Techter",
        5,
        TechterData.getSkillTree()
      ),
      braver: new Character("braver", "Braver", 6, BraverData.getSkillTree()),
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
        SummonerData.getSkillTree()
      ),
    };
  }
}
