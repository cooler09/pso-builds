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
import { CharactersDictionary } from "../shared/models/characters-dictionary";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  characters: CharactersDictionary;
  displayedSkill: Skill;
  selectedPrimaryClass: string = "hunter";
  selectedSecondaryClass: string = "ranger";
  selectedCharacterId: string = "hunter";
  selectedTab: number = 0;

  subscription: Subscription;

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    private readonly route: ActivatedRoute,
    private readonly compression: CompressionService,
    private readonly _snackBar: MatSnackBar
  ) {
    this.characters = MockData.buildCharacterSkillTrees();

    this.displayedSkill = this.characters["hunter"].skillTree["1"];
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      let preload = params["preload"];
      if (preload) {
        let initialData = this.compression.decompressObject(
          decodeURIComponent(preload)
        );

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
      let characterRef = this.characters[this.selectedCharacterId];
      switch (data.action) {
        case SkillAction.Add:
          characterRef.add(data.id);
          characterRef.updateAvailableSP();
          break;
        case SkillAction.Remove:
          characterRef.remove(data.id);
          characterRef.updateAvailableSP();
          break;
      }
    }
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
