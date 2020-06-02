import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Skill } from "../models/skill";

@Component({
  selector: "app-skill-row",
  templateUrl: "./skill-row.component.html",
  styleUrls: ["./skill-row.component.scss"],
})
export class SkillRowComponent implements OnInit {
  @Input() skills: Skill[];

  @Output() skillClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  skillClickedEvent(data: any) {
    this.skillClicked.emit(data);
  }
}
