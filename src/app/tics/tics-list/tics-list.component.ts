import { Component, OnInit } from '@angular/core';
import {FirebaseService, TicsAlumno} from "../../services/firebase.service";

@Component({
  selector: 'app-tics-list',
  templateUrl: './tics-list.component.html',
  styleUrls: ['./tics-list.component.scss'],
})
export class TicsListComponent implements OnInit {
  alumnos: TicsAlumno[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getTicsAlumnos().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }
}
