import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  email = ""
  form = false
  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
  }

  enviarForm(){
    this.contactoService.enviarFormulario({
      nombre: "TRABAJO" ,// ahora sí
      email: this.email
    }).subscribe({
      next: () => {
        this.form = true;

      },
      error: () => {
        this.form = false;

      }
    });
  }
  }

