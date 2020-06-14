export class CharacterMin {
  i: string;
  s: any;
  a: number;
  l: number;
  c: number;
  constructor(
    id: string,
    skillTree: any,
    available: number,
    selectedLevel: number,
    selectedCoSP: number
  ) {
    this.i = id;
    this.s = skillTree;
    this.a = available;
    this.l = selectedLevel;
    this.c = selectedCoSP;
  }
}
