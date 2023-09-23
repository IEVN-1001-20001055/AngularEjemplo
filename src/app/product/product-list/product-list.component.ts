import { Component } from '@angular/core';
import { Iproductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ///directivas *ngif

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

productos:Iproductos[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"Febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"https://www.elsoldemexico.com.mx/deportes/automotriz/8f8vv2-sentra_portada.jpg/ALTERNATES/LANDSCAPE_1140/sentra_portada.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"Febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"https://th.bing.com/th/id/OIP.PUZYTPjJpB02IWf9Ij1PKAHaE7?pid=ImgDet&rs=1"

  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    'year':"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl":"https://th.bing.com/th/id/R.65fe14f9a0f10ada54c8a718b61b2824?rik=CYsIg8%2fUQaopCw&pid=ImgRaw&r=0"

  }
]

}
