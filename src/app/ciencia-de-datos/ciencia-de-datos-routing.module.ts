import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CienciaDeDatosListComponent } from './ciencia-de-datos-list/ciencia-de-datos-list.component';
import { CienciaDatosFormComponent } from './ciencia-de-datos-form/ciencia-de-datos-form.component';

const routes: Routes = [
  { path: '', component: CienciaDeDatosListComponent }, // Ruta para listar
  { path: 'formularios', component: CienciaDatosFormComponent }, // Ruta para formulario de registro
  { path: 'formularios/:id', component: CienciaDatosFormComponent } // Ruta para editar con ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CienciaDeDatosRoutingModule {}
