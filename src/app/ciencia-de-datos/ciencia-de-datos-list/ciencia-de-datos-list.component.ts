import { Component, OnInit } from '@angular/core';
import { FirebaseService, Aspirante } from '../../services/firebase.service';

@Component({
  selector: 'app-ciencia-de-datos-list',
  templateUrl: './ciencia-de-datos-list.component.html',
  styleUrls: ['./ciencia-de-datos-list.component.scss'],
})
export class CienciaDeDatosListComponent implements OnInit {
  aspirantes: Aspirante[] = []; // Declaramos el array aspirantes

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.obtenerAspirantes(); // Llamamos al método para obtener los aspirantes
  }

  obtenerAspirantes() {
    this.firebaseService.getAspirantes().subscribe((data: Aspirante[]) => {
      this.aspirantes = data; // Asignamos los datos obtenidos a la propiedad aspirantes
    }, error => {
      console.error('Error al obtener los aspirantes:', error);
    });
  }
}
