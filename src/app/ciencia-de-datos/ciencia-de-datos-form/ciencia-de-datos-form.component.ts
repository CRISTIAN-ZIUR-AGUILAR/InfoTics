import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService, Aspirante } from '../../services/firebase.service';

@Component({
  selector: 'app-ciencia-datos-form',
  templateUrl: './ciencia-de-datos-form.component.html',
  styleUrls: ['./ciencia-de-datos-form.component.scss']
})
export class CienciaDatosFormComponent {
  aspiranteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.aspiranteForm = this.fb.group({
      Nombre: ['', [Validators.required]],
      ApellidoP: ['', [Validators.required]],
      ApellidoM: ['', [Validators.required]],
      Correo: ['', [Validators.required, Validators.email]],
      NumeroT: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
    
  }

  onSubmit() {
    if (this.aspiranteForm.valid) {
      const nuevoAspirante: Aspirante = this.aspiranteForm.value;
      this.firebaseService.addAspirante(nuevoAspirante).then(() => {
        console.log('Datos de aspirante enviados a Firebase');
        this.aspiranteForm.reset();
      }).catch((error) => {
        console.error('Error al agregar aspirante:', error);
      });
    }
  }
}
