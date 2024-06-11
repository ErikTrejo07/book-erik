import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'app-proyect-page',
  templateUrl: './proyect-page.component.html',
  styleUrls: ['./proyect-page.component.css'],
})
export class ProyectPageComponent implements OnInit  {

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


  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
