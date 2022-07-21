import { defaults } from './config';
import { keysParser } from '../index';
import { throwError } from '../modules/errorHandler';

const { describe, expect, it } = defaults;

describe('Main test', () => {
  const testData = { small: { fast: { car: 'Ferrari' } } };

  it('Without String', () => {
    expect(keysParser('', testData)).toBe(throwError({ name: 'emptyString' }));
  });

  it('Without Object', () => {
    expect(keysParser('small.fast.car')).toBe(throwError({ name: 'emptyObj' }));
  });

  it('Key for Simple value', () => {
    expect(keysParser('small.fast.car.ferrari', testData)).toBeFalsy();
  });

  it('Empty key', () => {
    expect(keysParser('small.fast.fly', testData)).toBeFalsy();
  });

  it('Correct call', () => {
    expect(keysParser('small.fast.car', testData)).toBe('Ferrari');
  });
});
