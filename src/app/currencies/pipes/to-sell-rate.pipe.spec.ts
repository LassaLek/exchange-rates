import { ToSellRatePipe } from './to-sell-rate.pipe';

describe('ToSellRatePipe', () => {
  it('create an instance', () => {
    const pipe = new ToSellRatePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform 2 to 2.1', () => {
    const pipe = new ToSellRatePipe();
    expect(pipe.transform(2)).toBe(2.1);
  });
});
