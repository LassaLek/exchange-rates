import { Component, Input, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-exchange-rate-table',
  templateUrl: './exchange-rate-table.component.html',
  styleUrls: ['./exchange-rate-table.component.css']
})
export class ExchangeRateTableComponent implements OnInit {
  @Input() public exchangeRatesData: any = {
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
