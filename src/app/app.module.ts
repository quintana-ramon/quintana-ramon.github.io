import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkillsComponent,
    AchievementsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
