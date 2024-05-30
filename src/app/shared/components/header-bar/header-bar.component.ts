import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Proyect } from 'src/app/countries/interfaces/proyect.interface';

@Component({
  selector: 'sahred-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent {

  @Input()
  public proyectList: Proyect[] = [];

  @Input()
  public index2: number = 0;

}
