import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GQrPage } from './g-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GQrPageRoutingModule {}
