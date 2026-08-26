import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Proyect } from '../../interfaces/proyect.interface';
import { Channel } from '../../interfaces/channel.type';

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent {

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
