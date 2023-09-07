import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: 'El correo ha sido enviado a la direccion solicitada, porfavor revise su bandeja de entrada. ',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
