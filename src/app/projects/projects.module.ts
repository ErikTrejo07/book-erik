import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsSectionComponent } from './pages/projects-section/projects-section.component';
import { ProjectsRoutingModule } from './projects-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { MyExperinceSectionComponent } from './components/my-experince-section/my-experince-section.component';
import { ProjectPageComponent } from './pages/proyect-page/proyect-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsSectionComponent,
    ProyectCardComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    MyExperinceSectionComponent,
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
  ]
})
export class ProjectsModule {}
