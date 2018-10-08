import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-exchange-rate-page',
  templateUrl: './exchange-rate-page.component.html',
  styleUrls: ['./exchange-rate-page.component.css']
})
export class ExchangeRatesPageComponent implements OnInit {

  public exchangeRates$: Observable<any> = this.currenciesService.getExchangeRates();

  constructor(private currenciesService: CurrenciesService) {
  }

  ngOnInit() {

  }

  updateExchangeRates(data: any) {
    this.exchangeRates$ = this.currenciesService.getExchangeRates(data);
  }

}
