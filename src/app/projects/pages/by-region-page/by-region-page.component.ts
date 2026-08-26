import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Proyect } from '../../interfaces/proyect.interface';
import { Channel } from '../../interfaces/channel.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent {

  public channels: Channel[] = [
    'Todos',
    'Móvil',
    'Web',
    'Autoservicio',
    'Otros'
  ];

  public selected: Channel = 'Todos';

  constructor(
    private countriesService: CountriesService
  ) {}

  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }

  get filteredProjects(): Proyect[] {

    if (this.selected === 'Todos') {
      return this.proyects;
    }

    return this.proyects.filter(
      proyect =>
        proyect.channel === this.selected ||
        proyect.channel === 'Multicanal'
    );

  }

  setTab(channel: Channel): void {

    if (!channel) return;

    this.selected = channel;

  }

}
