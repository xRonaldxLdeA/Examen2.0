import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formRegister = this.fb.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'repeatPassword': new FormControl("", Validators.required),

    })
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formRegister.value;
    if (this.formRegister.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    if(f.password == f.repeatPassword){
      var usuario = {
        username: f.username,
        password: f.password
      }
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate(['/login'])
    }else{
      const alert = await this.alertController.create({
        header: 'Contraseñas incorrectas',
        message: 'Las contraseñas tienen que ser iguales.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    
  }
}