import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSellRate'
})
export class ToSellRatePipe implements PipeTransform {

  private simpleSell = 1.05;

  transform(value: any, args?: any): any {
    return value * this.simpleSell;
  }

}
