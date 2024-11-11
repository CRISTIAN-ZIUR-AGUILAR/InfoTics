import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InformaticaRoutingModule } from './informatica-routing.module';
import { InformaticaListComponent } from './informatica-list/informatica-list.component';
import { InformaticaFormComponent } from './informatica-form/informatica-form.component'; // Importa el componente de formulario
import { HomeInformaticaComponent } from './home-informatica/home-informatica.component'; // Importa HomeInformatica

@NgModule({
  declarations: [
    InformaticaListComponent,
    InformaticaFormComponent ,
    HomeInformaticaComponent, // Declara HomeInformatica aquí

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InformaticaRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InformaticaModule {}
