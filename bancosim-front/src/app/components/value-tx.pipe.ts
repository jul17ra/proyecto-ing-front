import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueTx'
})
export class ValueTxPipe implements PipeTransform {

  transform(valor: string): string {
    if (!valor) {
      return valor;
    }
    const valorTransformado = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return valorTransformado;
  }

}
