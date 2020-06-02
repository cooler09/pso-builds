import { Component, OnInit } from "@angular/core";
import { Skill } from "../shared/models/skill";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  rowOne: Skill[];
  rowTwo: Skill[];
  rowThree: Skill[];
  rowFour: Skill[];
  constructor() {
    this.rowOne = [
      new Skill("1", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("2", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("3", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("4", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("5", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("6", "HP Up 1", "/assets/icons/hp_up_1.png"),
    ];
    this.rowTwo = [
      null,
      null,
      null,
      null,
      null,
      new Skill("6", "HP Up 1", "/assets/icons/hp_up_1.png"),
    ];
    this.rowThree = [
      null,
      new Skill("2", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("3", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("4", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("5", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("6", "HP Up 1", "/assets/icons/hp_up_1.png"),
    ];
    this.rowFour = [
      null,
      new Skill("2", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("3", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("4", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("5", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("6", "HP Up 1", "/assets/icons/hp_up_1.png"),
    ];
  }

  ngOnInit(): void {}
}
