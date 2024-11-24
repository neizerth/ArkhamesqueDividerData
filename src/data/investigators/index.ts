import * as campaigns from './campaigns';
import promo from './promo.json';
import challenge from './challenge.json';

export default [
  ...Object.values(campaigns),
  promo,
  challenge
]