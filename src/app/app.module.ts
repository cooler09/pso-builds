import { BrowserModule } from "@angular/platform-browser";
import { NgModule, FactoryProvider, InjectionToken } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SkillComponent } from "./shared/skill/skill.component";
import { SkillRowComponent } from "./shared/skill-row/skill-row.component";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CharacterTabComponent } from "./shared/character-tab/character-tab.component";
export const WINDOW = new InjectionToken<Window>("window");

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window,
};

export const WINDOW_PROVIDERS = [windowProvider];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    SkillRowComponent,
    CharacterTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ClipboardModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
