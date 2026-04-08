import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'; // Importante para manipular el DOM de forma segura
import { SchemaService } from './service/schema.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'R5-NODO-DEPORTIVO';
  idioma: string = 'esp';
  isDropdownOpen: boolean = true;


  constructor(private viewportScroller: ViewportScroller, private titleService: Title,
    private metaService: Meta,
    private schemaService: SchemaService
  ) { }

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }



  ngOnInit() {
    // 1. Título de la página
    this.titleService.setTitle('R5 Gimnasio | Entrenamiento Funcional y Salud en La Plata');

    // 2. Meta Tags (SEO y Redes Sociales)
    this.metaService.addTags([
      { name: 'description', content: 'Gimnasio R5 en La Plata. Especialistas en entrenamiento funcional, crossfit y salud integral. ¡Vení a entrenar con nosotros!' },
      { name: 'keywords', content: 'Gimnasio La Plata, Entrenamiento Funcional, R5, Crossfit La Plata, Fitness, Salud' },
      { name: 'author', content: 'R5 Nodo Deportivo' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph (Facebook, WhatsApp, Instagram)
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.r5.com.ar/' },
      { property: 'og:title', content: 'R5 Gimnasio - Entrenamiento y Salud en La Plata' },
      { property: 'og:description', content: 'Especialistas en entrenamiento funcional y salud integral. ¡Sumate a nuestra comunidad!' },
      { property: 'og:image', content: 'https://www.r5.com.ar/assets/logo-share.jpg' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'R5 Gimnasio - La Plata' },
      { name: 'twitter:image', content: 'https://www.r5.com.ar/assets/logo-share.jpg' }
    ]);

    // 3. JSON-LD (Datos Estructurados para el Negocio Local)
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HealthClub",
          "@id": "https://www.r5.com.ar/#organization",
          "name": "R5 - Entrenamiento y Salud",
          "url": "https://www.r5.com.ar",
          "image": "https://www.r5.com.ar/assets/logo.png",
          "telephone": "+5492215055082", // ¡No olvides poner el teléfono real!
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C. 90 878, 1900 Villa Elvira, Provincia de Buenos Aires", // ¡No olvides poner la dirección real!
            "addressLocality": "La Plata",
            "addressRegion": "Buenos Aires",
            "postalCode": "1900",
            "addressCountry": "AR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.9214, // Cambia por tus coordenadas reales si las tienes
            "longitude": -57.9545
          },
          "priceRange": "$$"
        },
        {
          "@type": "ItemList",
          "name": "Nuestras Actividades",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Entrenamiento Funcional"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Crossfit / HIIT"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Preparación Física"
            }
          ]
        }
      ]
    };

    this.schemaService.insertSchema(schema);
  }
}



