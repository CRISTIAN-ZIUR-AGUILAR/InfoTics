import { Component, OnInit } from '@angular/core';
import { FirebaseService, TicsAlumno } from '../../services/firebase.service';

@Component({
  selector: 'app-tics-list',
  templateUrl: './tics-list.component.html',
  styleUrls: ['./tics-list.component.scss'],
})
export class TicsListComponent implements OnInit {
  ticsAlumnos: TicsAlumno[] = []; // Array para almacenar los alumnos

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Usar el método correcto para obtener la lista de alumnos
    this.firebaseService.getTicsAlumnos().subscribe((data) => {
      this.ticsAlumnos = data; // Asigna los datos recibidos al array
    });
  }
}
