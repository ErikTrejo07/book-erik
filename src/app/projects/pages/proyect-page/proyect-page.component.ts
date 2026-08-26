import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'app-proyect-page',
  templateUrl: './proyect-page.component.html',
  styleUrls: ['./proyect-page.component.css'],
})
export class ProyectPageComponent implements OnInit {

  public proyect?: Proyect;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {

    window.scrollTo(0, 0);

    const id = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );

    this.proyect = this.countriesService.proyects.find(
      proyect => proyect.id === id
    );

  }

}
