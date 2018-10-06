import { TestBed, inject } from '@angular/core/testing';

import { CurrenciesApiService } from './currencies-api.service';

describe('ExchangeRatesApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrenciesApiService]
    });
  });

  it('should be created', inject([CurrenciesApiService], (service: CurrenciesApiService) => {
    expect(service).toBeTruthy();
  }));
});
