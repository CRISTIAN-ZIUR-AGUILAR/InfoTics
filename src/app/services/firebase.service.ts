import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Alumno {
  id?: string;
  ApellidoM: string;
  ApellidoP: string;
  Correo: string;
  Nombre: string;
  NumeroT: string; 
}

export interface Aspirante {
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
  private cienciaDeDatosCollection = collection(this.firestore, 'CIENCIA-DE-DATOS'); // New collection for Aspirantes

  constructor(private firestore: Firestore) {}

  // Get list of Alumnos
  getAlumnos(): Observable<Alumno[]> {
    return collectionData(this.informaticaCollection, { idField: 'id' }) as Observable<Alumno[]>;
  }

  // Add a new Alumno to Firebase
  addAlumno(alumno: Alumno): Promise<any> {
    return addDoc(this.informaticaCollection, alumno)
      .then((docRef) => {
        console.log('Alumno added with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding Alumno:', error);
      });
  }

  // Get list of Aspirantes
  getAspirantes(): Observable<Aspirante[]> {
    return collectionData(this.cienciaDeDatosCollection, { idField: 'id' }) as Observable<Aspirante[]>;
  }

  // Add a new Aspirante to Firebase
  addAspirante(aspirante: Aspirante): Promise<any> {
    return addDoc(this.cienciaDeDatosCollection, aspirante)
      .then((docRef) => {
        console.log('Aspirante added with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding Aspirante:', error);
      });
  }
}
