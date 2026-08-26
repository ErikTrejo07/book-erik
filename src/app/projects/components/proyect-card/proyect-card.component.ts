
import { Component, Input } from '@angular/core';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'proyects-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
})
export class ProyectCardComponent {

  @Input()
  public proyect!: Proyect;

}
