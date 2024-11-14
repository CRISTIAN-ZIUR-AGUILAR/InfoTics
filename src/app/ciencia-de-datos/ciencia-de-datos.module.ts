import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CienciaDeDatosRoutingModule } from './ciencia-de-datos-routing.module'; // Asegúrate de importar el módulo de rutas
import { CienciaDeDatosListComponent } from './ciencia-de-datos-list/ciencia-de-datos-list.component';
import { CienciaDatosFormComponent } from './ciencia-de-datos-form/ciencia-de-datos-form.component'; // Importa el componente de formulario

@NgModule({
  declarations: [
    CienciaDeDatosListComponent,
    CienciaDatosFormComponent // Declara el componente aquí
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, // Asegúrate de importar el IonicModule para tener acceso a los componentes de Ionic como ion-content
    CienciaDeDatosRoutingModule // Asegúrate de importar el módulo de rutas
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Si es necesario
})
export class CienciaDeDatosModule {}
