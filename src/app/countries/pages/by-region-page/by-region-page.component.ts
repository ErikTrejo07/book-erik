import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { Proyect } from '../../interfaces/proyect.interface';
import { Channel } from '../../interfaces/channel.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  public proyects2: Proyect[] = [];
  public channels: Channel[] = ['Móvil', 'Web', 'Autoservicio', 'Otros', ''];
  public selectedChannel?: Channel;

  constructor( private countriesService: CountriesService ) {}

  // SEccion del CV
  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }


  ngOnInit(): void {
    // this.proyects = this.countriesService.cacheStore.byRegion.proyects;
    // this.selectedChannel = this.countriesService.cacheStore.byRegion.channel;
  }

  searchByChannel( channel: Channel ):void  {

    this.selectedChannel = channel;

    this.countriesService.searchChannel( channel )
      // .subscribe( proyects => {
      //   this.proyects = proyects;
      // });
      ;

  }
  // ------------------------------------//

  // ngOnInit(): void {
  //   this.countries = this.countriesService.cacheStore.byRegion.countries;
  //   this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  // }

  // searchByRegion( region: Region ):void  {

  //   this.selectedRegion = region;

  //   this.countriesService.searchRegion( region )
  //     .subscribe( countries => {
  //       this.countries = countries;
  //     });

  // }

}
