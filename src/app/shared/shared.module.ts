import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    NavbarComponent,
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    NavbarComponent,
    HeaderBarComponent
  ]
})
export class SharedModule { }
