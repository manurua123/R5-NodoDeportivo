import { trigger, transition, style, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {
  imagenes: string[] = [
    '/img/galeria/img1.png',
    '/img/galeria/img2.png',
     '/img/galeria/img3.png',
      '/img/galeria/img4.png'
  
  ];
  imagenActual: string = '';

  indice: number = 0;
  intervalo: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.imagenActual = this.imagenes[this.indice];
      this.intervalo = setInterval(() => {
        this.indice = (this.indice + 1) % this.imagenes.length;
        this.imagenActual = this.imagenes[this.indice];
      }, 2000);
    }
  }

}
