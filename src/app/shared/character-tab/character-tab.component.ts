import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../models/character";

@Component({
  selector: "app-character-tab",
  templateUrl: "./character-tab.component.html",
  styleUrls: ["./character-tab.component.scss"],
})
export class CharacterTabComponent implements OnInit {
  @Input() selectedCharacter: Character;
  @Output() resetSkills = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
