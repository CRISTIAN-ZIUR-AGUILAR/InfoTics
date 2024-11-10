import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService, Alumno } from '../../services/firebase.service';

@Component({
  selector: 'app-informatica-form',
  templateUrl: './informatica-form.component.html',
  styleUrls: ['./informatica-form.component.scss']
})
export class InformaticaFormComponent {
  alumnoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.alumnoForm = this.fb.group({
      Nombre: ['', Validators.required],
      ApellidoP: ['', Validators.required],
      ApellidoM: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      NomeroT: ['', Validators.required] // Asegúrate de que coincide con la interfaz 'Alumno'
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const nuevoAlumno: Alumno = this.alumnoForm.value;
      this.firebaseService.addAlumno(nuevoAlumno).then(() => {
        console.log('Datos enviados a Firebase');
        this.alumnoForm.reset();
      }).catch((error) => {
        console.error('Error al agregar alumno:', error);
      });
    }
  }
}
