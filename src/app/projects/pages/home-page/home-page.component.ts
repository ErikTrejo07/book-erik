import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ContactPageComponent } from '../../../shared/pages/contact-page/contact-page.component';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {


  constructor(
    private scrollService: ProjectsService
  ) {}

  ngOnInit() {
    this.scrollService.mantenerScroll();
  }
}
