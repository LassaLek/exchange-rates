import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimDecimal'
})
export class TrimDecimalPipe implements PipeTransform {
  private trimTo = 4;

  transform(value: any, args?: any): any {
    return Number.parseFloat(value).toFixed(this.trimTo);
  }

}
