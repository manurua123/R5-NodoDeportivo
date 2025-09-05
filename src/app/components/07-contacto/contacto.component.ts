import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  miFormulario: FormGroup;
  enviExitoso = false;

  // OJO: acá va `private contactoService`
  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  enviarFormulario() {
    this.contactoService.enviarFormulario({
      nombre: this.miFormulario.value.nombre, // ahora sí
      email: this.miFormulario.value.email
    }).subscribe({
      next: () => {
        this.enviExitoso = true;
       
        this.miFormulario.reset(); // opcional: limpiar el form
      },
      error: () => {
        this.enviExitoso = false;
      
      }
    });
  }
}
