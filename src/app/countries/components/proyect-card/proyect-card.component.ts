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
export class ProyectCardComponent {

  constructor(
  ) {
    // this.loadChannelLocalStorage();
  }

  public index: number = 0;
  public index3: string = ''
  public channelSelected: string = 'Autoservicio';
  public selected: string = '';

  @Input()
  public pActivos: Proyect[] = [];


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

  // ngOnInit(): void {
    //   this.countries = this.countriesService.cacheStore.byRegion.countries;
    //   this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  //   this.loadChannelLocalStorage();
  // }


  // private loadChannelLocalStorage():void {
  //   if( !localStorage.getItem('pActivos') ) return;
  //   this.pActivos = JSON.parse(localStorage.getItem('pActivos')!);

  //   console.log('Canal seleccionado: ',this.channelSelected);
  //   console.log('desde la card: ',this.pActivos);

  // }

  // -------- intento de mandar canal input ---------
  // @Input()
  // public channelSelected2: string = 'Móvil';


}
