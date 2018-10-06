import { Component, Input, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { ExchangeRatesModel } from '../../models/exchange-rates.model';

@Component({
  selector: 'app-exchange-rate-table',
  templateUrl: './exchange-rate-table.component.html',
  styleUrls: ['./exchange-rate-table.component.css']
})
export class ExchangeRateTableComponent implements OnInit {
  @Input() public exchangeRatesData: ExchangeRatesModel = {
    rates: {},
    currencies: []
  };


  constructor() {
  }

  ngOnInit() {
  }

  reorder() {
    this.exchangeRatesData.currencies = this.exchangeRatesData.currencies.reverse();
  }

  isHighlighted(currency: string): boolean {
    return CurrenciesService.getBaseCurrencies().includes(currency);
  }

}
