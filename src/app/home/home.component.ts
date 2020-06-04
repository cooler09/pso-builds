import { Component, OnInit } from "@angular/core";
import { Skill } from "../shared/models/skill";
import { SkillAction } from "../shared/models/skill-action";
import { SkillTree } from "../shared/models/skill-tree";
import MockData from "../shared/models/mock-data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  availableSkills: number;
  skillTree: SkillTree;
  displayedSkill: Skill;

  constructor() {
    this.skillTree = MockData.buildSkillTree();
    this.availableSkills = 10;
    this.displayedSkill = this.skillTree["1"];
  }

  ngOnInit(): void {}
  skillClicked(data: any) {
    if (data) {
      switch (data.action) {
        case SkillAction.Add:
          if (this.availableSkills > 0) {
            let skill = this.skillTree[data.id];
            if (skill && skill.currentLevel < skill.maxLevel) {
              skill.currentLevel += 1;
              this.availableSkills -= 1;
              this.validateChildDependecies(skill);
            }
          }
          break;
        case SkillAction.Remove:
          let skill = this.skillTree[data.id];
          if (skill && skill.currentLevel > 0) {
            this.availableSkills += 1;
            skill.currentLevel -= 1;
            this.validateChildDependecies(skill);
          }
          break;
      }
    }
  }
  displaySkill(skill: Skill) {
    this.displayedSkill = skill;
  }
  private validateChildDependecies(skill: Skill) {
    if (skill.children && skill.children.length > 0) {
      skill.children.forEach((_) => {
        let child = this.skillTree[_.id];
        if (child) {
          if (skill.currentLevel >= _.prerequisite) {
            child.locked = false;
          } else {
            child.locked = true;
          }
        }
      });
    }
  }
}
