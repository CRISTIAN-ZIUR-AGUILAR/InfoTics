import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformaticaListComponent } from './informatica-list/informatica-list.component';
import { InformaticaFormComponent } from './informatica-form/informatica-form.component';

const routes: Routes = [
  { path: '', component: InformaticaListComponent }, // Esta es la principal para listar
  { path: 'formularios', component: InformaticaFormComponent }, // Aquí el formulario de registro
  { path: 'formularios/:id', component: InformaticaFormComponent } // Aquí para editar con ID
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformaticaRoutingModule {}
