import { keysParser } from './build/index.js';

console.log(
  '"{ a: { b: { c: \'да\' } } }" :: result ::',
  keysParser('a.b.gg', { a: { b: { name: 'Pidralkin', is_pidor: 'нет', sosetInDayCount: 32 } } })
);
