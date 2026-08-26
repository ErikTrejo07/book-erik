import { Component, Input } from '@angular/core';
import { Project } from 'src/app/projects/interfaces/project.interface';
import { ProjectsService } from 'src/app/projects/services/projects.service';

@Component({
  selector: 'sahred-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent {

  @Input()
  public project!: Project;

  constructor(
    private projectsService: ProjectsService
  ) {}

  mantenerScroll(): void {
    this.projectsService.mantenerScroll();
  }

}
