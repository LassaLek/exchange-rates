import { TestBed, inject } from '@angular/core/testing';
import { ExchangeRatesApi } from './exchange-rates.api';


describe('ExchangeRatesApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeRatesApi]
    });
  });

  it('should be created', inject([ExchangeRatesApi], (service: ExchangeRatesApi) => {
    expect(service).toBeTruthy();
  }));
});
