import { Component, OnInit } from "@angular/core";
import { Skill } from "../shared/models/skill";
import { SkillAction } from "../shared/models/skill-action";
import { SkillType } from "../shared/models/skill-type";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  availableSkills: number;
  skillTree: Skill[][];
  constructor() {
    this.availableSkills = 5;
    let rowOne = [
      new Skill("1", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10),
      new Skill("2", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("3", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("4", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("5", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("6", "HP Up 1", "/assets/icons/hp_up_1.png"),
    ];
    let rowTwo = [
      null,
      null,
      null,
      null,
      null,
      new Skill("7", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
        SkillType.Passive
      ),
    ];
    let rowThree = [
      null,
      new Skill("8", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10),
      new Skill("9", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10),
      new Skill("10", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
        SkillType.Passive
      ),
      new Skill("11", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
        SkillType.Passive
      ),
      new Skill("12", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
        SkillType.Passive
      ),
    ];
    let rowFour = [
      null,
      new Skill("13", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10),
      new Skill("14", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10),
      new Skill("15", "HP Up 1", "/assets/icons/hp_up_1.png"),
      new Skill("16", "HP Up 1", "/assets/icons/hp_up_1.png").setSkillType(
        SkillType.Passive
      ),
      new Skill("17", "HP Up 1", "/assets/icons/hp_up_1.png").setMaxLevel(10),
    ];
    this.skillTree = [rowOne, rowTwo, rowThree, rowFour];
  }

  ngOnInit(): void {}
  skillClicked(data: any) {
    console.log(data);
    switch (data.action) {
      case SkillAction.Add:
        if (this.availableSkills > 0) {
          this.skillTree.forEach((row) => {
            let skill = row.find((_) => {
              return _ && _.id == data.id;
            });
            if (skill && skill.currentLevel < skill.maxLevel) {
              skill.currentLevel += 1;
              this.availableSkills -= 1;
            }
          });
        }
        break;
      case SkillAction.Remove:
        this.skillTree.forEach((row) => {
          let skill = row.find((_) => {
            return _ && _.id == data.id;
          });
          if (skill && skill.currentLevel > 0) {
            this.availableSkills += 1;
            skill.currentLevel -= 1;
          }
        });
        break;
    }
  }
}
