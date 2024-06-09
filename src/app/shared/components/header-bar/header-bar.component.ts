import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Proyect } from 'src/app/countries/interfaces/proyect.interface';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'sahred-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent {

  constructor(
    private countriesService: CountriesService,
  ) {
    this.loadIdLocalStorage();
  }

  public index2: number = 0;

  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }

  private loadIdLocalStorage():void {
    if( !localStorage.getItem('history') ) return;
    this.index2 = parseInt( localStorage.getItem('history')!, 10 );
  }

  mantenerScroll() {
    this.countriesService.mantenerScroll();
  }
}
