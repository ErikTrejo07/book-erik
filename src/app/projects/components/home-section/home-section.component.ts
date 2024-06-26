import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'proyects-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})
export class HomeSectionComponent {

  imagenDeFondo = './assets/Fondo-Inicio';

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
