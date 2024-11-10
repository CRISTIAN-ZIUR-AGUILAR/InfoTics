import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InformaticaRoutingModule } from './informatica-routing.module';
import { InformaticaListComponent } from './informatica-list/informatica-list.component';

@NgModule({
  declarations: [
    InformaticaListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InformaticaRoutingModule // Agrega el módulo de rutas aquí
  ]
})
export class InformaticaModule {}
