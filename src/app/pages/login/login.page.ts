import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  username= {user:null};

  constructor(public fb: FormBuilder, private router: Router, public alertController: AlertController) {
    this.formLogin = this.fb.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario.username == f.username && usuario.password == f.password) {
      let navigationExtras: NavigationExtras = { state: { usuario: this.username } };
      this.router.navigate(['/home'], navigationExtras)
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresó son incorrectos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
  }

}
