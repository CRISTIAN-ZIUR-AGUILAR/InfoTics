// tics-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService, TicsAlumno } from '../../services/firebase.service';

@Component({
  selector: 'app-tics-form',
  templateUrl: './tics-form.component.html',
  styleUrls: ['./tics-form.component.scss']
})
export class TicsFormComponent {
  ticsForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private firebaseService: FirebaseService
  ) {
    this.ticsForm = this.fb.group({
      Nombre: ['', Validators.required],
      ApellidoP: ['', Validators.required],
      ApellidoM: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      NumeroT: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ticsForm.valid) {
      const nuevoTicsAlumno: TicsAlumno = this.ticsForm.value;
      this.firebaseService.addtics(nuevoTicsAlumno).then(() => {
        console.log('Datos de TICS enviados a Firebase');
        this.ticsForm.reset();
      }).catch((error: any) => { // Aquí indicamos explícitamente el tipo de error como 'any'
        console.error('Error al agregar alumno de TICS:', error);
      });
    }
  }
}
