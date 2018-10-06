import { Pipe, PipeTransform } from '@angular/core';
import { CurrenciesConfig } from '../currencies.config';

@Pipe({
  name: 'toSellRate'
})
export class ToSellRatePipe implements PipeTransform {
  transform(value: number): number {
    return value * CurrenciesConfig.SELL_RATE;
  }

}
