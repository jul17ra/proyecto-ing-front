import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber'
})
export class AccountNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    const valorTransformado = value.replace(/(.{4})/g, '$1 ');
    return valorTransformado.trim();
  }

}
