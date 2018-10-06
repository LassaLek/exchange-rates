import { Pipe, PipeTransform } from '@angular/core';
import { CurrenciesConfig } from '../currencies.config';

@Pipe({
  name: 'trimDecimal'
})
export class TrimDecimalPipe implements PipeTransform {

  transform(value: any): number {
    const number = Number.parseFloat(value);

    if (isNaN(number)) {
      return 0;
    }
    return Number(number.toFixed(CurrenciesConfig.DECIMAL_POINTS));
  }

}
