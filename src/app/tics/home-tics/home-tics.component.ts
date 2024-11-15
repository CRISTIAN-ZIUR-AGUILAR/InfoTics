import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseService, TicsAlumno} from "../../services/firebase.service";

@Component({
  selector: 'app-home-tics',
  templateUrl: './home-tics.component.html',
  styleUrls: ['./home-tics.component.scss'],
})
export class HomeTicsComponent {

  ticsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router
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
      const nuevoAlumno: TicsAlumno = this.ticsForm.value;
      this.firebaseService.addtics(nuevoAlumno).then(() => {
        console.log('Datos enviados a Firebase');
        this.ticsForm.reset();
      }).catch((error) => {
        console.error('Error al agregar alumno:', error);
      });
    }
  }
  onInteresadoClick() {
    this.router.navigate(['/tics/formularios']);
  }
}
