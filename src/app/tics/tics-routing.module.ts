import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTicsComponent } from './home-tics/home-tics.component';
import { TicsFormComponent } from './tics-form/tics-form.component';
import { TicsListComponent } from './tics-list/tics-list.component';

const routes: Routes = [
  { path: '', component: HomeTicsComponent },
  { path: 'formularios', component: TicsFormComponent },
  { path: 'listas', component: TicsListComponent } // Ruta para la lista de TICs
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicsRoutingModule {}
