import { Component} from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls:['./mostrar.component.css']

})
export class MostrarComponent  {

  constructor() { }

   mensaje: string = 'Mostrar'
   mostrar:boolean=false
  
  accion(){
    if(this.mostrar ===false){
      this.mostrar = true
      this.mensaje = 'Esconder'
    }else if(this.mostrar===true){
      this.mostrar = false
      this.mensaje = 'Mostrar'
    }
  }
}
