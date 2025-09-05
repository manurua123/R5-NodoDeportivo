// contacto.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ContactoService {
private API_URL = 'https://r5.com.ar/contacto.php';

    constructor(private http: HttpClient) { }

    enviarFormulario(data: { nombre: string; email: string }) {
        return this.http.post(this.API_URL, data);
    }
}

