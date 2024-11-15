import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformaticaListComponent } from './informatica-list/informatica-list.component';
import { InformaticaFormComponent } from './informatica-form/informatica-form.component';
import {HomeInformaticaComponent} from "./home-informatica/home-informatica.component";

const routes: Routes = [
  { path: 'list', component: InformaticaListComponent }, // Esta es la principal para listar
  { path: 'formularios', component: InformaticaFormComponent }, // Aquí el formulario de registro
  { path: 'formularios/:id', component: InformaticaFormComponent }, // Aquí para editar con ID
  { path: 'home-informatica', component: HomeInformaticaComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformaticaRoutingModule {}
