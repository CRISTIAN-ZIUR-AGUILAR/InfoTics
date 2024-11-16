import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CienciaDeDatosListComponent } from './ciencia-de-datos-list/ciencia-de-datos-list.component';
import { CienciaDatosFormComponent } from './ciencia-de-datos-form/ciencia-de-datos-form.component';


const routes: Routes = [
  { path: 'list', component: CienciaDeDatosListComponent }, // Esta es la principal para listar
  { path: 'formularios', component: CienciaDatosFormComponent }, // Aquí el formulario de registro
  { path: 'formularios/:id', component: CienciaDatosFormComponent }, // Aquí para editar con ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CienciaDeDatosRoutingModule {}
