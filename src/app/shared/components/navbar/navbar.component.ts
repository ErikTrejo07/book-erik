import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  currentSection: string = 'seccion1';
  isCollapsed = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 60) {
        currentSection = section.id;
      }
    });
    this.currentSection = currentSection;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isCollapsed = true;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
