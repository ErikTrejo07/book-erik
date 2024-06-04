import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { Proyect } from '../../interfaces/proyect.interface';
import { Channel } from '../../interfaces/channel.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent  implements OnInit {

  public proyects2: Proyect[] = [];
  public channels: Channel[] = ['Todos','Móvil', 'Web', 'Autoservicio', 'Otros', ''];
  // public selectedChannel?: Channel;
  public channelSelected: string = 'Todos'

  constructor( private countriesService: CountriesService ) {}

  // SEccion del CV
  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }


  //ngOnInit(): void {
    // this.proyects = this.countriesService.cacheStore.byRegion.proyects;
    // this.selectedChannel = this.countriesService.cacheStore.byRegion.channel;
  //}

  searchByChannel( channel: Channel ):void  {

    this.channelSelected = channel;

    // this.countriesService.searchChannel( channel )
    //   .subscribe( proyects => {
    //     this.proyects = proyects;
    //   });
    //   ;

  }

  setChannel( channel: Channel ):void {

    if ( !channel ) return;
    this.channelSelected = channel;

    console.log(this.channelSelected);
    this.saveChannelLocalStorage();

  }

  // sendMessage() {
  //   this.saveChannelLocalStorage();
  // }

  private saveChannelLocalStorage():void {
    localStorage.setItem('channel', this.channelSelected);
  }



  // ------------------------------------//

   ngOnInit(): void {
  //   this.countries = this.countriesService.cacheStore.byRegion.countries;
  //   this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
   // this.channelSelected = this.countriesService.channelSelected;
   }

  // searchByRegion( region: Region ):void  {

  //   this.selectedRegion = region;

  //   this.countriesService.searchRegion( region )
  //     .subscribe( countries => {
  //       this.countries = countries;
  //     });

  // }

}
