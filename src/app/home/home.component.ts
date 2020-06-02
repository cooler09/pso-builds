import { Component, OnInit } from "@angular/core";
import { Skill } from "../shared/models/skill";
import { SkillAction } from "../shared/models/skill-action";
import { SkillType } from "../shared/models/skill-type";
import { ChildDependency } from "../shared/models/child-dependency";
import { SkillTree } from "../shared/models/skill-tree";
import MockData from "../shared/models/mock-data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  skillTree: SkillTree;

  constructor() {
    this.skillTree = MockData.buildSkillTree();
    console.log(this.skillTree);
  }

  ngOnInit(): void {}
  skillClicked(data: any) {
    if (data) {
      switch (data.action) {
        case SkillAction.Add:
          if (this.skillTree.availableSkills > 0) {
            let skill = this.skillTree[data.id];
            if (skill && skill.currentLevel < skill.maxLevel) {
              skill.currentLevel += 1;
              this.skillTree.availableSkills -= 1;
              this.validateChildDependecies(skill);
            }
          }
          break;
        case SkillAction.Remove:
          let skill = this.skillTree[data.id];
          if (skill && skill.currentLevel > 0) {
            this.skillTree.availableSkills += 1;
            skill.currentLevel -= 1;
            this.validateChildDependecies(skill);
          }
          break;
      }
    }
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
