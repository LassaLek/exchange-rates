import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { CurrenciesConfig } from '../currencies.config';
import { ResponseModel } from '../models/response.model';
import { BaseService } from '../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApi extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getExchangeRates(appendix: string): Observable<ResponseModel> {
    return this.baseGetRequest<ResponseModel>(CurrenciesConfig.BASE_API_ENDPOINT + appendix);
  }

}
