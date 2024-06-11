import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByCapitalPageComponent } from './pages/home-page/home-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ProyectPageComponent } from './pages/proyect-page/proyect-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: ByCapitalPageComponent,
  },
  // {
  //   path: 'by-region',
  //   component: ByRegionPageComponent,
  // },
  {
    path: 'by/:id',
    component: ProyectPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }

]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
