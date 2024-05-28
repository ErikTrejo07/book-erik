import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Proyect } from '../../interfaces/proyect.interface';

@Component({
  selector: 'proyects-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectCardComponent {
  @Input()
  public proyectList: Proyect[] = [{
    id:0,
    name: 'Trunks',
    canal: 'ATM'
  }];
}
