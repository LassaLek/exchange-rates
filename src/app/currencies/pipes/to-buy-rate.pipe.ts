import { Pipe, PipeTransform } from '@angular/core';
import { CurrenciesConfig } from '../currencies.config';

@Pipe({
  name: 'toBuyRate'
})
export class ToBuyRatePipe implements PipeTransform {
  transform(value: number): number {
    return value * CurrenciesConfig.BUY_RATE;
  }
}
