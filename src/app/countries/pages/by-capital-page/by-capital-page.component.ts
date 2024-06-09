import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ContactPageComponent } from '../../../shared/pages/contact-page/contact-page.component';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {


  constructor( private scrollService: CountriesService ) {}

  ngOnInit() {
    this.scrollService.mantenerScroll();
  }
}
