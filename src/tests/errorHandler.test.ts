import { throwError } from '../modules/errorHandler';
import { defaults } from './config/index';

const { describe, expect, it } = defaults;

describe('Error messages', () => {
  it('Correct error message without emptyString parameter', () => {
    expect(throwError({ name: 'emptyString' })).toBe("keysParser ERROR: Parameter <string> can't be empty");
  });
  it('Correct error message without emptyObj parameter', () => {
    expect(throwError({ name: 'emptyObj' })).toBe('keysParser ERROR: Parameter <obj> must contain at least one key');
  });
  it('Correct error message without some parameter', () => {
    expect(throwError({ name: 'some problem' })).toBe('keysParser ERROR: some problem');
  });
});
