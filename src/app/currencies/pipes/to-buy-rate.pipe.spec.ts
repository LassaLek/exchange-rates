import { ToBuyRatePipe } from './to-buy-rate.pipe';

describe('ToBuyRatePipe', () => {
  it('create an instance', () => {
    const pipe = new ToBuyRatePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform 2 to 1.9', () => {
    const pipe = new ToBuyRatePipe();
    expect(pipe.transform(2)).toBe(1.9);
  });
});
