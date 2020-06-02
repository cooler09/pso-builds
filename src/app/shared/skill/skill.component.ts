import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../models/skill";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;
  constructor() {}

  ngOnInit(): void {}

  prev() {
    if (this.skill.currentLevel > 0) this.skill.currentLevel -= 1;
  }
  next() {
    if (this.skill.currentLevel < this.skill.maxLevel)
      this.skill.currentLevel += 1;
  }
}
