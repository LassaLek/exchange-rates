import { Injectable } from '@angular/core';
import { ExchangeRatesApi } from './exchange-rates.api';
import { ExchangesRatesResponseModel } from './exchanges-rates-response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  public static getBaseCurrencies() {
    return ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
  }

  public static getToday() {
    return new Date().toJSON().slice(0, 10);
  }

  // TODO remove all any!!
  constructor(private exchangeRatesApi: ExchangeRatesApi) {
  }

  public getExchangeRates(data?: any): Observable<any> {
    let appendix = '';
    if (data && data.date) {
      appendix += data.date;
    } else {
      appendix += 'latest';
    }

    if (data && data.currency) {
      appendix += '?base=' + data.currency;
    }

    return this.exchangeRatesApi.getExchangeRates(appendix).pipe(
      map((response: ExchangesRatesResponseModel) => {
        return {
          rates: response.rates,
          currencies: Object.keys(response.rates).sort()
        } || {
          rates: {},
          currencies: []
        };

      })
    );
  }


}
