import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrenciesService } from '../../services/currencies.service';
import { ExchangeRateFormModel } from '../../models/exchange-rate-form.model';
import { CurrenciesConfig } from '../../currencies.config';

@Component({
  selector: 'app-exchange-rate-form',
  templateUrl: './exchange-rate-form.component.html',
  styleUrls: ['./exchange-rate-form.component.css']
})
export class ExchangeRateFormComponent {

  @Output() onFormSubmit = new EventEmitter<ExchangeRateFormModel>();

  public today = CurrenciesService.getToday();
  public start = CurrenciesConfig.START_DATA;
  public availableCurrencies: string[] = CurrenciesService.getBaseCurrencies().sort();

  public exchangeRatesForm = new FormGroup({
    currency: new FormControl(this.availableCurrencies[0]),
    date: new FormControl(this.today),
  });

  onSubmit(): void {
    this.onFormSubmit.emit(this.exchangeRatesForm.value);
  }

}
