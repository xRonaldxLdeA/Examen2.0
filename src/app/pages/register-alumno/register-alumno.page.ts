import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.page.html',
  styleUrls: ['./register-alumno.page.scss'],
})
export class RegisterAlumnoPage implements OnInit {

  formularioRegistro:FormGroup;

  constructor(public fb2:FormBuilder, public alertController: AlertController, private router: Router) {
    this.formularioRegistro = this.fb2.group({
      'username': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'repeatPassword': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
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
      this.router.navigate(['/login-alumno'])
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
