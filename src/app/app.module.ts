import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesModule } from './currencies/currencies.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/currencies/currencies.module#CurrenciesModule'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CurrenciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
