import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Skill } from "../models/skill";
import { SkillTree } from "../models/skill-tree";

@Component({
  selector: "app-skill-row",
  templateUrl: "./skill-row.component.html",
  styleUrls: ["./skill-row.component.scss"],
})
export class SkillRowComponent implements OnInit {
  @Input() rowIndex: string;
  @Input() skills: string[];
  @Input() skillTree: SkillTree;

  @Output() displaySkill = new EventEmitter();
  @Output() skillClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  skillClickedEvent(data: any) {
    this.skillClicked.emit(data);
  }
  mouseEnter(skill: Skill) {
    this.displaySkill.emit(skill);
  }
}
