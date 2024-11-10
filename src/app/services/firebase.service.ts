import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Alumno {
  id?: string;
  ApellidoM: string;
  ApellidoP: string;
  Correo: string;
  Nombre: string;
  NomeroT: string; // Corrige aquí si debe ser 'NumeroT'
}

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private informaticaCollection = collection(this.firestore, 'Informatica');

  constructor(private firestore: Firestore) {}

  // Obtener lista de alumnos
  getAlumnos(): Observable<Alumno[]> {
    return collectionData(this.informaticaCollection, { idField: 'id' }) as Observable<Alumno[]>;
  }

  // Método para agregar un nuevo alumno a Firebase
  addAlumno(alumno: Alumno): Promise<any> { // Cambié el tipo de retorno a 'Promise<any>'
    return addDoc(this.informaticaCollection, alumno)
      .then((docRef) => {
        console.log('Alumno agregado a Firebase con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar alumno:', error);
      });
  }
}

