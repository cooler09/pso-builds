import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Skill } from "../models/skill";
import { SkillAction } from "../models/skill-action";
import { SkillType } from "../models/skill-type";
import { SkillTree } from "../models/skill-tree";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;
  @Input() skillTree: SkillTree;
  @Output() skillClicked = new EventEmitter();
  parent: Skill;
  get skillType() {
    return SkillType;
  }
  constructor() {}

  ngOnInit(): void {
    if (this.skill.parent) {
      this.parent = this.skillTree[this.skill.parent.id];
    }
  }

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
