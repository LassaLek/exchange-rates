import { TrimDecimalPipe } from './trim-decimal.pipe';

describe('TrimDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimDecimalPipe();
    expect(pipe).toBeTruthy();
  });

  it('unexpected value to zero', () => {
    const pipe = new TrimDecimalPipe();
    expect(pipe.transform('string')).toBe(0);
  });

  it('trim 0.35684 to 0.3568', () => {
    const pipe = new TrimDecimalPipe();
    expect(pipe.transform(0.35684)).toBe(0.3568);
  });

  it('trim string 0.35684 to 0.3568', () => {
    const pipe = new TrimDecimalPipe();
    expect(pipe.transform('0.35684')).toBe(0.3568);
  });

  it('trim 3 to 3.0000', () => {
    const pipe = new TrimDecimalPipe();
    expect(pipe.transform(3)).toBe(3.0000);
  });
});
