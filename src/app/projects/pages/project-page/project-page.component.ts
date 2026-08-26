import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {

  public project?: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {

    window.scrollTo(0, 0);

    const id = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );

    this.project = this.projectsService.projects.find(
      project => project.id === id
    );

  }

}
