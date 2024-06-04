import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyect } from '../../interfaces/proyect.interface';
import { Channel } from '../../interfaces/channel.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'proyects-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectCardComponent  {

  constructor(
  ) {
    //this.loadChannelLocalStorage();
  }

  public index: number = 0;
  public index3: string = ''
  public selectedChanel: string = 'Autoservicio';

  // ngOnInit(): void {
  //   //   this.countries = this.countriesService.cacheStore.byRegion.countries;
  //   //   this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  //     this.channelSelected = this.countriesService.channelSelected;
  //    }

  @Input()
  public proyectList: Proyect[] = [];

  enviarId(id?: number):void {

    if ( !id ) return;
    this.index3 = id.toString();

  }

  sendMessage() {
    this.saveIdLocalStorage();
  }

  private saveIdLocalStorage():void {
    localStorage.setItem('history', this.index3)
  }


  // --------------intento de mandar canal por local storage ---------
  // private loadChannelLocalStorage():void {
  //   if( !localStorage.getItem('channel') ) return;
  //   this.channelSelected = localStorage.getItem('channel')!;

  //   console.log('Canal seleccionado: ',this.channelSelected);

  // }

  // -------- intento de mandar canal input ---------
  // @Input()
  // public channelSelected2: string = 'Móvil';


}
