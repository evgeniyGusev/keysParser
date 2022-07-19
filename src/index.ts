import { KeysParserReturn } from './modules/types';
import { throwError } from './modules/errorHandler.js';

export const keysParser = (string: String, obj: Object = {}): KeysParserReturn => {
  if (!string) {
    return throwError({ name: 'emptyString' });
  }

  if (!Object.keys(obj).length) {
    return throwError({ name: 'emptyObj' });
  }

  const parsedKeys: string[] = string.split('.');
  let total = obj;
  let error = false;
  let lastObject;

  parsedKeys.forEach(el => {
    if (typeof total[el] !== 'undefined') {
      if (typeof total[el] !== 'object') {
        lastObject = el;
      }

      total = total[el];
    } else {
      const name = lastObject
        ? `The key "${el}" can't be found in the "${lastObject}", because "${lastObject}'s" value is simple type`
        : `The key "${el}" can't be found...  Maybe you meant something like these: "${Object.keys(total)}"?`;

      error = true;
      return throwError({ name });
    }
  });

  return error ? false : total;
};
