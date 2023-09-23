import { Pipe, PipeTransform } from '@angular/core';
import { Iproductos } from './iproductos';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value: Iproductos[], args:string): Iproductos[] {

    let filter:string= args ? args.toLocaleLowerCase():'';
    return filter ? value.filter((product:Iproductos)=>product.Modelo.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }

}
