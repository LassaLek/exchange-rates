import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-exchange-rate-form',
  templateUrl: './exchange-rate-form.component.html',
  styleUrls: ['./exchange-rate-form.component.css']
})
export class ExchangeRateFormComponent implements OnInit {

  // TODO model
  @Output() onFormSubmit = new EventEmitter<any>();

  public today = CurrenciesService.getToday();
  public start = '2015-01-01';

  public availableCurrencies: string[] = CurrenciesService.getBaseCurrencies().sort();

  public exchangeRatesForm = new FormGroup({
    currency: new FormControl(this.availableCurrencies[0]),
    date: new FormControl(this.today),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.exchangeRatesForm.value);
    this.onFormSubmit.emit(this.exchangeRatesForm.value);
  }

}
