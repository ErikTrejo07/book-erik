import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsSectionComponent } from './pages/projects-section/projects-section.component';
import { ProjectsRoutingModule } from './projects-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { MyExperienceSectionComponent } from './components/my-experience-section/my-experience-section.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsSectionComponent,
    ProjectCardComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    MyExperienceSectionComponent,
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
  ]
})
export class ProjectsModule {}
