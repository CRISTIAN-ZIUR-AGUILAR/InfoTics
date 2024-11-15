import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CienciaDeDatosRoutingModule } from './ciencia-de-datos-routing.module';
import { CienciaDeDatosListComponent } from './ciencia-de-datos-list/ciencia-de-datos-list.component';
import { CienciaDatosFormComponent } from './ciencia-de-datos-form/ciencia-de-datos-form.component'; // Importa el componente de formulario
import { HomeCienciaDeDatosComponent } from './home-ciencia-de-datos/home-ciencia-de-datos.component'; // Importa HomeCienciaDeDatos

@NgModule({
  declarations: [
    CienciaDeDatosListComponent,
    CienciaDatosFormComponent,
    HomeCienciaDeDatosComponent, // Declara HomeCienciaDeDatos aquí
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CienciaDeDatosRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CienciaDeDatosModule {}
