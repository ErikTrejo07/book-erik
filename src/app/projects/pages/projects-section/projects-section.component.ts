import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project.interface';
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
    private projectsService: ProjectsService
  ) {}

  get projects(): Project[] {
    return [...this.projectsService.projects];
  }

  get filteredProjects(): Project[] {

    if (this.selected === 'Todos') {
      return this.projects;
    }

    return this.projects.filter(
      project =>
        project.channel === this.selected ||
        project.channel === 'Multicanal'
    );

  }

  setTab(channel: Channel): void {

    if (!channel) return;

    this.selected = channel;

  }

}
