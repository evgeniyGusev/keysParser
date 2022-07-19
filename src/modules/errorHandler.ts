import { ThrowErrorParameter } from '../types';

export const throwError = (errorObject: ThrowErrorParameter): string => {
  const { name } = errorObject;
  const errorMessages: { emptyString: string; emptyObj: string } = {
    emptyString: "keysParser ERROR: Parameter <string> can't be empty",
    emptyObj: 'keysParser ERROR: Parameter <obj> must contain at least one key',
  };

  if (name === 'emptyString' || name === 'emptyObj') {
    console.error(errorMessages[name]);
    return errorMessages[name];
  } else {
    console.error(`keysParser ERROR: ${name}`);
    return `keysParser ERROR: ${name}`;
  }
};
