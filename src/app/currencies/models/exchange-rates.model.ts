export interface ExchangeRatesModel {
  rates: { [key: string]: number };
  currencies: string[];
}
