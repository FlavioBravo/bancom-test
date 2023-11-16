import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { AchievementSectionComponent } from './components/achievement-section/achievement-section.component';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MainSectionComponent,
    FeatureSectionComponent,
    AchievementSectionComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, MatIconModule, MatCardModule, SharedModule],
})
export class HomeModule {}
