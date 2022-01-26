import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAlumnoPageRoutingModule } from './register-alumno-routing.module';

import { RegisterAlumnoPage } from './register-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterAlumnoPageRoutingModule
  ],
  declarations: [RegisterAlumnoPage]
})
export class RegisterAlumnoPageModule {}
