import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExchangesRatesResponseModel } from './exchanges-rates-response.model';
import { Observable } from 'rxjs/index';

const BASE_URL = 'http://localhost:4200/api/';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApi {
  constructor(private http: HttpClient) { }

  getExchangeRates(appendix: string): Observable<ExchangesRatesResponseModel> {
    // TODO add base and date to request ...
    return this.http.get<ExchangesRatesResponseModel>(BASE_URL + appendix);
  }
}
