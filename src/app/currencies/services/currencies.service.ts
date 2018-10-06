import { Injectable } from '@angular/core';
import { ExchangeRatesApi } from './exchange-rates.api';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/index';
import { ExchangeRatesModel } from '../models/exchange-rates.model';
import { ResponseModel } from '../models/response.model';
import { ExchangeRateFormModel } from '../models/exchange-rate-form.model';

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

  constructor(private exchangeRatesApi: ExchangeRatesApi) {
  }

  public getExchangeRates(form?: ExchangeRateFormModel): Observable<ExchangeRatesModel> {
    return this
      .exchangeRatesApi
      .getExchangeRates(
        this.prepareUrlQuery(form)
      )
      .pipe(
        map(this.transformResponse)
      );
  }

  private transformResponse(response: ResponseModel): ExchangeRatesModel {
    if (!response || !response.rates) {
      return {
        rates: {},
        currencies: []
      };
    }

    return {
      rates: response.rates,
      currencies: Object.keys(response.rates).sort()
    };
  }

  private prepareUrlQuery(data?: ExchangeRateFormModel): string {
    let appendix = '';
    if (data && data.date) {
      appendix += data.date;
    } else {
      appendix += 'latest';
    }

    if (data && data.currency) {
      appendix += '?base=' + data.currency;
    }

    return appendix;
  }

}
