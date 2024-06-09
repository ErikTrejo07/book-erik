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
  public channelSelected: string = 'Todos';
  selected: string = 'Todos';
  projectsActivos: Proyect[] = [];


  constructor( private countriesService: CountriesService ) {}

  // SEccion del CV
  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }


  //ngOnInit(): void {
    // this.proyects = this.countriesService.cacheStore.byRegion.proyects;
    // this.selectedChannel = this.countriesService.cacheStore.byRegion.channel;
  //}

  setTab( channel: Channel ):void {
    if ( !channel ) return;
    this.selected = channel;

    this.searchByChannel();
    console.log(this.projectsActivos);
    console.log(this.proyects);
    console.log('Tab seleccionada', this.selected);
    this.saveChannelLocalStorage();
  }

  searchByChannel(  ):void  { //channel: Channel

    if ( this.selected !== 'Todos' ) {
      this.projectsActivos = this.proyects.filter(project => project.channel === this.selected || project.channel === 'Multicanal');
      console.log('Filtrado' );
      //this.channelSelected = channel;
    } else {
      this.projectsActivos = this.proyects;
      console.log('No filtrado' );
    }

    // this.countriesService.searchChannel( channel )
    //   .subscribe( proyects => {
    //     this.proyects = proyects;
    //   });
    //   ;
  }


  private saveChannelLocalStorage():void {
    localStorage.setItem('channel', this.selected);
    localStorage.setItem('pActivos', JSON.stringify(this.projectsActivos));

    this.loadChannelLocalStorage();
  }

  // Intentar leer datos del localStorage en el componente padre y mandarlos por in @Input
  loadActivos: Proyect[] = this.proyects;

  private loadChannelLocalStorage():void {
    if( !localStorage.getItem('pActivos') ) return;
    this.loadActivos = JSON.parse(localStorage.getItem('pActivos')!);

    console.log('Canal seleccionado leido: ',this.channelSelected);
    console.log('desde la card leido: ',this.loadActivos);

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
