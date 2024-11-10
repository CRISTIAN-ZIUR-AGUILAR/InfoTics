import { Component, OnInit } from '@angular/core';
import { FirebaseService, Alumno } from '../../services/firebase.service';

@Component({
  selector: 'app-informatica-list',
  templateUrl: './informatica-list.component.html',
  styleUrls: ['./informatica-list.component.scss']
})
export class InformaticaListComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos() {
    this.firebaseService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }
}
