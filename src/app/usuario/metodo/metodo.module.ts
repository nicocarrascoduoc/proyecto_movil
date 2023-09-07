import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoPageRoutingModule } from './metodo-routing.module';

import { MetodoPage } from './metodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoPageRoutingModule
  ],
  declarations: [MetodoPage]
})
export class MetodoPageModule {}
