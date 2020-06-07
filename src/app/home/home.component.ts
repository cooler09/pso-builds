import { Component, OnInit } from "@angular/core";
import { Skill } from "../shared/models/skill";
import { SkillAction } from "../shared/models/skill-action";
import MockData from "../shared/models/mock-data";
import { Character } from "../shared/models/character";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  characters: any;
  displayedSkill: Skill;
  selectedPrimaryClass: string = "hunter";
  selectedSecondaryClass: string = "ranger";
  selectedCharacterId: string = "bouncer";
  classIds: string[] = [];
  selectedTab: number = 0;
  coSkillPoints: number[] = [];
  levels: number[] = [];

  constructor() {
    this.characters = MockData.buildCharacterSkillTrees();

    for (let index = 1; index <= 75; index++) {
      this.levels.push(index);
    }
    for (let index = 0; index < 15; index++) {
      this.coSkillPoints.push(index);
    }
    this.classIds = (Object.values(this.characters) as Character[]).map((_) => {
      return _.id;
    });
    this.displayedSkill = this.characters["bouncer"].skillTree["1"];
  }

  ngOnInit(): void {}
  skillClicked(data: any) {
    if (data) {
      switch (data.action) {
        case SkillAction.Add:
          this.characters[this.selectedCharacterId].add(data.id);
          break;
        case SkillAction.Remove:
          this.characters[this.selectedCharacterId].remove(data.id);
          break;
      }
    }
  }
  updateSelectedCharacter() {
    this.selectedCharacterId = this.characters[
      this.classIds[this.selectedTab]
    ].id;
  }
  displaySkill(skill: Skill) {
    this.displayedSkill = skill;
  }
}
