import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Skill } from "../models/skill";
import { SkillAction } from "../models/skill-action";
import { SkillType } from "../models/skill-type";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;
  @Output() skillClicked = new EventEmitter();

  get skillType() {
    return SkillType;
  }
  constructor() {}

  ngOnInit(): void {}

  prev() {
    this.skillClicked.emit({
      action: SkillAction.Remove,
      id: this.skill.id,
    });
  }
  next() {
    this.skillClicked.emit({
      action: SkillAction.Add,
      id: this.skill.id,
    });
  }
}
