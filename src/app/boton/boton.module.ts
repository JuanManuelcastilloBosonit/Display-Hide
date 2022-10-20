import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './mostrar/mostrar.component';



@NgModule({
  declarations: [
    MostrarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MostrarComponent
  ]
})
export class BotonModule { }
