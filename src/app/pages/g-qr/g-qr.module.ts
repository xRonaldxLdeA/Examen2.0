import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GQrPageRoutingModule } from './g-qr-routing.module';

import { GQrPage } from './g-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GQrPageRoutingModule
  ],
  declarations: [GQrPage]
})
export class GQrPageModule {}
