import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBuyRate'
})
export class ToBuyRatePipe implements PipeTransform {

  private simpleBuy = 0.95;

  transform(value: any, args?: any): any {
    return value * this.simpleBuy;
  }

}
