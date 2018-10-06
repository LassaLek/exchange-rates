import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRatesPageComponent } from './containers/exchange-rates-page/exchange-rates-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateFormComponent } from './exchange-rate-form/exchange-rate-form.component';
import { ExchangeRateTableComponent } from './exchange-rate-table/exchange-rate-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrimDecimalPipe } from './trim-decimal.pipe';
import { ToSellRatePipe } from './to-sell-rate.pipe';
import { ToBuyRatePipe } from './to-buy-rate.pipe';

const currenciesRoutes: Routes = [
  {
    path: 'currencies',
    component: ExchangeRatesPageComponent
  },
  {
    path: '**',
    redirectTo: 'currencies'
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(currenciesRoutes)
  ],
  declarations: [
    ExchangeRatesPageComponent,
    ExchangeRateFormComponent,
    ExchangeRateTableComponent,
    TrimDecimalPipe,
    ToSellRatePipe,
    ToBuyRatePipe
  ]
})
export class CurrenciesModule {
}