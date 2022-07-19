import { ThrowErrorParameter } from './types';

export const throwError = (errorObject: ThrowErrorParameter) => {
  const { name } = errorObject;
  const errorMessages: { emptyString: string; emptyObj: string } = {
    emptyString: "keysParser ERROR: Parameter <string> can't be empty",
    emptyObj: 'keysParser ERROR: Parameter <obj> must contain at least one key',
  };

  if (name === 'emptyString' || name === 'emptyObj') {
    return console.error(errorMessages[name]);
  } else {
    return console.error(name)
  }
};
