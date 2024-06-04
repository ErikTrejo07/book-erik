import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { MyExperinceSectionComponent } from './components/my-experince-section/my-experince-section.component';
import { ProyectPageComponent } from './pages/proyect-page/proyect-page.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ProyectCardComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    MyExperinceSectionComponent,
    ProyectPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class CountriesModule { }
