import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../models/skill";

@Component({
  selector: "app-skill-row",
  templateUrl: "./skill-row.component.html",
  styleUrls: ["./skill-row.component.scss"],
})
export class SkillRowComponent implements OnInit {
  @Input() skills: Skill[];

  // @Output() skillSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
