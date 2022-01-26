import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  usuario = null;
  codigo = null;
  constructor(private barcodeScanner: BarcodeScanner, private activatedRoute: ActivatedRoute, private router: Router, public popoverController: PopoverController) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      }
    })
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverController,
      cssClass: 'select-popover',
      event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigo = barcodeData.text;
      console.log('Barcode data', this.codigo);
    }).catch(err => {
      console.log('Error', err)
    })
  }
}
