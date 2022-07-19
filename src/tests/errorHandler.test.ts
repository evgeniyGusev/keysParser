import { throwError } from '../modules/errorHandler';

test('Correct error message without one of parameters', () => {
  expect(throwError({ name: 'emptyString' })).toBe("keysParser ERROR: Parameter <string> can't be empty");
  expect(throwError({ name: 'emptyObj' })).toBe('keysParser ERROR: Parameter <obj> must contain at least one key');
  expect(throwError({ name: 'some problem' })).toBe('keysParser ERROR: some problem');
});
