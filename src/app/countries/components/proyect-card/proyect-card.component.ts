import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'proyects-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectCardComponent {

  public index: number = 0;
  public index3: string = ''

  @Input()
  public proyectList: Proyect[] = [];

  // public proyect: Proyect = {
  //   id: 0,
  //   name:'',
  //   channel:''
  // }

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteProyect( id?: number ):void {

    if ( !id ) return;
    this.onDelete.emit( id );

    console.log(id);
    console.log(this.proyectList)

  }

  @Output()
  public valorEmitido: EventEmitter<number> = new EventEmitter();


  enviarId(id?: number):void {

    if ( !id ) return;
    this.valorEmitido.emit(id);
    this.index3 = id.toString();

    console.log(id);
    console.log(this.proyectList)
  }




  public message: string = "Hola Mundo!";

  @Output()
  public messageEvent = new EventEmitter<string>();

  constructor() {}

  sendMessage() {
    this.messageEvent.emit(this.message);
    this.saveIdLocalStorage();
  }

  private saveIdLocalStorage():void {
    localStorage.setItem('history', this.index3)
  }



}
