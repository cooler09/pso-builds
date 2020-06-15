import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../models/character";

@Component({
  selector: "app-character-tab",
  templateUrl: "./character-tab.component.html",
  styleUrls: ["./character-tab.component.scss"],
})
export class CharacterTabComponent implements OnInit {
  @Input() character: Character;

  @Output() skillClicked = new EventEmitter();
  @Output() displaySkill = new EventEmitter();

  coSkillPoints: number[] = [];
  levels: number[] = [];

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.coSkillPoints.push(index);
    }
    for (let index = 1; index <= 75; index++) {
      this.levels.push(index);
    }
  }

  ngOnInit(): void {}
  updateAvailableSkills() {
    this.character.resetSkills();
    this.character.updateAvailableSP();
  }
}
