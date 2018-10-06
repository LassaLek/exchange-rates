export interface ExchangesRatesResponseModel {
  base: string;
  date: string;
  rates: { [Key in string]: number };
}
