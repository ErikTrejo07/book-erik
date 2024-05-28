import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'app-proyect-page',
  templateUrl: './proyect-page.component.html',
  styleUrls: ['./proyect-page.component.css'],
})
export class ProyectPageComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}


  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }

  @Input()
  public proyectList: Proyect[] = [{
    id: 1,
    name: 'Trunks',
    canal: 'ATM'
  }];
}
