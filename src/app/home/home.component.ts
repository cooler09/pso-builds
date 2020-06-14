import { Component, OnInit, Inject } from "@angular/core";
import { Skill } from "../shared/models/skill";
import { SkillAction } from "../shared/models/skill-action";
import MockData from "../shared/models/mock-data";
import { Character } from "../shared/models/character";
import { WINDOW } from "../app.module";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CompressionService } from "../shared/services/compression.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  characters: any;
  displayedSkill: Skill;
  selectedPrimaryClass: string = "hunter";
  selectedSecondaryClass: string = "ranger";
  selectedCharacterId: string = "hunter";
  orderedClasses: Character[];
  selectedTab: number = 0;
  coSkillPoints: number[] = [];
  levels: number[] = [];

  subscription: Subscription;

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    private readonly route: ActivatedRoute,
    private readonly compression: CompressionService,
    private readonly _snackBar: MatSnackBar
  ) {
    this.characters = MockData.buildCharacterSkillTrees();

    for (let index = 1; index <= 75; index++) {
      this.levels.push(index);
    }
    for (let index = 0; index < 15; index++) {
      this.coSkillPoints.push(index);
    }
    this.orderedClasses = (Object.values(this.characters) as Character[]).sort(
      function (a, b) {
        return b.tabIndex + a.tabIndex;
      }
    );
    this.displayedSkill = this.characters["hunter"].skillTree["1"];
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      let preload = params["preload"];
      if (preload) {
        let initialData = this.compression.decompressObject(
          decodeURIComponent(preload)
        );
        console.log(initialData);

        if (initialData.selectedPrimaryClass) {
          this.selectedPrimaryClass = initialData.selectedPrimaryClass;
        }
        if (initialData.selectedSecondaryClass) {
          this.selectedSecondaryClass = initialData.selectedSecondaryClass;
        }

        if (initialData.selectedTab) {
          this.selectedTab = initialData.selectedTab;
          this.updateSelectedCharacter();
        }
        if (initialData.characters && initialData.characters.length > 0) {
          initialData.characters.forEach((_) => {
            this.characters[_.i].setMinData(_);
          });
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  skillClicked(data: any) {
    if (data) {
      switch (data.action) {
        case SkillAction.Add:
          this.characters[this.selectedCharacterId].add(data.id);
          break;
        case SkillAction.Remove:
          this.characters[this.selectedCharacterId].remove(data.id);
          break;
      }
    }
  }
  updateAvailableSkills() {
    this.characters[this.selectedCharacterId].updateAvailableSP();
    this.characters[this.selectedCharacterId].resetSkills();
  }
  updateSelectedCharacter() {
    this.selectedCharacterId = (Object.values(
      this.characters
    ) as Character[]).find((_) => {
      return _.tabIndex === this.selectedTab;
    }).id;
  }
  displaySkill(skill: Skill) {
    this.displayedSkill = skill;
  }
  generateUrl() {
    let characters = (Object.values(this.characters) as Character[])
      .filter((_) => {
        return _.availableSkills < _.selectedCoSP + _.selectedLevel;
      })
      .map((_) => {
        return _.simplifyModel();
      });
    let param = this.compression.compressObject({
      selectedSecondaryClass: this.selectedSecondaryClass,
      selectedPrimaryClass: this.selectedPrimaryClass,
      selectedTab: this.selectedTab,
      characters: characters,
    });
    return `${this.window.location.hostname}/${param}`;
  }
  displaySnackBar() {
    this._snackBar.open("Copied to Clipboard", null, {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });
  }
}
