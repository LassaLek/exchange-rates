import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { CurrenciesConfig } from '../currencies.config';
import { ResponseModel } from '../models/response.model';
import { retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApi {
  constructor(private http: HttpClient) { }

  getExchangeRates(appendix: string): Observable<ResponseModel> {
    return this.http
      .get<ResponseModel>(CurrenciesConfig.BASE_API_ENDPOINT + appendix)
      .pipe(
        retry(1)
      );
  }
}
