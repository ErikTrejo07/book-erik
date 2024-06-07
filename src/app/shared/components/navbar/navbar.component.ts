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

  descargarArchivo() {
    const nombreArchivo = 'CV_Erik_Trejo_2024.pdf';  // Nombre del archivo en la carpeta assets
    const archivoURL = `assets/${nombreArchivo}`;  // Ruta relativa al archivo en la carpeta assets

    const link = document.createElement('a');
    link.href = archivoURL;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
