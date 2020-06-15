import { Character } from "./character";

export class CharactersDictionary {
  hunter: Character;
  fighter: Character;
  ranger: Character;
  gunner: Character;
  force: Character;
  techter: Character;
  braver: Character;
  bouncer: Character;
  summoner: Character;

  getCharacterArray(): Character[] {
    return [
      this.hunter,
      this.fighter,
      this.ranger,
      this.gunner,
      this.force,
      this.techter,
      this.braver,
      this.bouncer,
      this.summoner,
    ];
  }
}
