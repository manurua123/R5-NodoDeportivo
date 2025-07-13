import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent  {
  secciones = [
    { id: 'deporte1' },
    { id: 'deporte2' },
    { id: 'deporte3' }
  ];

  activeSection = '';

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.6 });

    document.querySelectorAll('section.seccion').forEach(section => {
      observer.observe(section);
    });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }


}
