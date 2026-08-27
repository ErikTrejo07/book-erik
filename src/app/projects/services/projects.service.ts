import { Injectable } from '@angular/core';

import { Project } from '../interfaces/project.interface';
import { PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  public readonly projects: Project[] = PROJECTS;

  getProjectById(id: number): Project | undefined {

    return this.projects.find(
      project => project.id === id
    );

  }

}
