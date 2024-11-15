import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicsRoutingModule } from './tics-routing.module';
import { HomeTicsComponent } from './home-tics/home-tics.component';
import { TicsFormComponent } from './tics-form/tics-form.component';
import { TicsListComponent } from './tics-list/tics-list.component';

@NgModule({
  declarations: [
    HomeTicsComponent,
    TicsFormComponent,
    TicsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TicsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicsModule {}
