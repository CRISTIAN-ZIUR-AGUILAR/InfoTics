import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, docData, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc } from "firebase/firestore";

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

export interface TicsAlumno {
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
  private ticsCollection = collection(this.firestore, 'Tics');
  private informaticaCollection = collection(this.firestore, 'Informatica');
  private cienciaDeDatosCollection = collection(this.firestore, 'CIENCIA-DE-DATOS'); // Colección para Aspirantes

  constructor(private firestore: Firestore) {}

  /*
  Métodos para la colección de Informatica
  */

  // Obtener lista de alumnos de Informatica
  getAlumnos(): Observable<Alumno[]> {
    return collectionData(this.informaticaCollection, { idField: 'id' }) as Observable<Alumno[]>;
  }

  // Agregar un nuevo Alumno a Informatica
  addAlumno(alumno: Alumno): Promise<any> {
    return addDoc(this.informaticaCollection, alumno)
      .then((docRef) => {
        console.log('Alumno agregado con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar Alumno:', error);
      });
  }

  /*
  Métodos para la colección de CIENCIA-DE-DATOS (Aspirantes)
  */

  // Obtener lista de aspirantes de Ciencia de Datos
  getAspirantes(): Observable<Aspirante[]> {
    return collectionData(this.cienciaDeDatosCollection, { idField: 'id' }) as Observable<Aspirante[]>;
  }

  // Agregar un nuevo Aspirante a Ciencia de Datos
  addAspirante(aspirante: Aspirante): Promise<any> {
    return addDoc(this.cienciaDeDatosCollection, aspirante)
      .then((docRef) => {
        console.log('Aspirante agregado con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar Aspirante:', error);
      });
  }

  /*
  Métodos para la colección de Tics
  */

  // Agregar un nuevo alumno a Tics
  // Método para agregar un nuevo alumno a la colección 'Tics' en Firebase
  addtics(alumno: TicsAlumno): Promise<any> {
    return addDoc(this.ticsCollection, alumno)
      .then((docRef) => {
        console.log('Alumno de TICS agregado con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar alumno de TICS:', error);
        throw error;
      });
  }

  // Obtener lista de alumnos de Tics
  getTicsAlumnos(): Observable<TicsAlumno[]> {
    return collectionData(this.ticsCollection, { idField: 'id' }) as Observable<TicsAlumno[]>;
  }

  // Obtener un alumno de Tics por ID
  getTicsAlumnoById(id: string): Observable<TicsAlumno> {
    const alumnoDocRef = doc(this.firestore, `Tics/${id}`);
    return docData(alumnoDocRef, { idField: 'id' }) as Observable<TicsAlumno>;
  }

  // Actualizar un alumno de Tics
  updateTicsAlumno(id: string, alumno: Partial<TicsAlumno>): Promise<void> {
    const alumnoDocRef = doc(this.firestore, `Tics/${id}`);
    return updateDoc(alumnoDocRef, alumno);
  }

  // Eliminar un alumno de Tics
  deleteTicsAlumno(id: string): Promise<void> {
    const alumnoDocRef = doc(this.firestore, `Tics/${id}`);
    return deleteDoc(alumnoDocRef);
  }
}
