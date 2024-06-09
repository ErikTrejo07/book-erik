
import { Component, Input } from '@angular/core';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'proyects-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
})
export class ProyectCardComponent {

  constructor() {}

  public index: string = '';

  @Input()
  public pActivos: Proyect[] = [];


  enviarId(id?: number):void {

    if ( id !== 0 ) {
      this.index = id!.toString();
    } else {
      this.index = '0';
    }
    this.saveIdLocalStorage();
  }

  private saveIdLocalStorage():void {
    localStorage.setItem('history', this.index)
  }

}
