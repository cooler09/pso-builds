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
import { CharactersDictionary } from "./characters-dictionary";

export default class MockData {
  static buildCharacterSkillTrees(): CharactersDictionary {
    let characterDict = new CharactersDictionary();
    characterDict.hunter = new Character(
      "hunter",
      "Hunter",
      0,
      HunterData.getSkillTree()
    );
    characterDict.fighter = new Character(
      "fighter",
      "Fighter",
      1,
      FighterData.getSkillTree()
    );
    characterDict.ranger = new Character(
      "ranger",
      "Ranger",
      2,
      RangerData.getSkillTree()
    );
    characterDict.gunner = new Character(
      "gunner",
      "Gunner",
      3,
      GunnerData.getSkillTree()
    );
    characterDict.force = new Character(
      "force",
      "Force",
      4,
      ForceData.getSkillTree()
    );
    characterDict.techter = new Character(
      "techter",
      "Techter",
      5,
      TechterData.getSkillTree()
    );
    characterDict.braver = new Character(
      "braver",
      "Braver",
      6,
      BraverData.getSkillTree()
    );
    characterDict.bouncer = new Character(
      "bouncer",
      "Bouncer",
      7,
      BouncerData.getSkillTree()
    );
    characterDict.summoner = new Character(
      "summoner",
      "Summoner",
      8,
      SummonerData.getSkillTree()
    );
    return characterDict;
  }
}
