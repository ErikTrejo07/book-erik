import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'proyects-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css'],
})
export class AboutMeSectionComponent {

  public birthdate: Date = new Date(1990, 0, 7);

  calcularEdad(): number {
    const actualDate: Date = new Date();
    const operation = actualDate.getTime() - this.birthdate.getTime();
    const yearsOld = Math.floor(operation / (1000 * 60 * 60 * 24 * 365.25));
    return yearsOld;
  }

}
