import * as campaigns from './campaigns';
import promo from './promo.json';
import decks from './decks.json';

export default [
  ...Object.values(campaigns),
  promo,
  decks
]