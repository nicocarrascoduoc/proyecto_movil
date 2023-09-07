import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
    
      this.formularioRegistro = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todo',
        buttons: ['Aceptar']
      })

      await alert.present();
      return;
    }
    var usuario = {
      correo: f.correo,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
