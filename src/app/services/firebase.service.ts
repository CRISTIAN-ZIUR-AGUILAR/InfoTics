import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Alumno {
  id?: string;
  ApellidoM: string;
  ApellidoP: string;
  Correo: string;
  Nombre: string;
  NumeroT: string;
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
}
