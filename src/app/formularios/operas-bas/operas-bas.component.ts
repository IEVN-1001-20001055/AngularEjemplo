import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  operacion:string='';
  num1:string='';
  num2: string='';
  resultado:number=0;


  Calcular():void{
    if (this.operacion === 'sumar') {
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
    } 
    else if (this.operacion === 'restar') {
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
    }
     else if (this.operacion === 'multiplicar') {
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    } 
    else if (this.operacion === 'dividir') {
      this.resultado = parseInt(this.num1) / parseInt(this.num2);
    }

  }

}
