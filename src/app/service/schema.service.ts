import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  constructor(@Inject(DOCUMENT) private _document: Document) { }

  // Usamos un ID para identificar el script y poder reemplazarlo
  insertSchema(data: any, schemaId: string = 'structured-data') {
    // 1. Eliminar esquema previo si existe
    const oldScript = this._document.getElementById(schemaId);
    if (oldScript) {
      oldScript.remove();
    }

    // 2. Crear y añadir el nuevo
    const script = this._document.createElement('script');
    script.type = 'application/ld+json';
    script.id = schemaId;
    script.text = JSON.stringify(data);
    this._document.head.appendChild(script);
  }
}
