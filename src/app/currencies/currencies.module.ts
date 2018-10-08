import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRatesPageComponent } from './containers/exchange-rate-page/exchange-rate-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateFormComponent } from './components/exchange-rate-form/exchange-rate-form.component';
import { ExchangeRateTableComponent } from './components/exchange-rate-table/exchange-rate-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrimDecimalPipe } from './pipes/trim-decimal.pipe';
import { ToSellRatePipe } from './pipes/to-sell-rate.pipe';
import { ToBuyRatePipe } from './pipes/to-buy-rate.pipe';

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
