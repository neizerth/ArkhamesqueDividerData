import survivor from './survivor.json'
import mystic from './mystic.json'
import seeker from './seeker.json'
import guardian from './guardian.json'
import rogue from './rogue.json'
import neutral from './neutral.json'
import multiclass from './multiclass.json'
import { IArkhamesquePlayerItem } from '@/types'

const withFaction = (
  faction: string, 
  data: Omit<IArkhamesquePlayerItem, 'faction'>[]
): IArkhamesquePlayerItem[] => data.map(item => ({
  ...item,
  faction
}));

export default [
  {
    prefix: 'Survivor-',
    data: withFaction('survivor', survivor)
  },
  {
    prefix: 'Mystic-',
    data: withFaction('mystic', mystic)
  },
  {
    prefix: 'Seeker-',
    data: withFaction('seeker', seeker)
  },
  {
    prefix: 'Guardian-',
    data: withFaction('guardian', guardian)
  },
  {
    prefix: 'Rogue-',
    data: withFaction('rogue', rogue)
  },
  {
    prefix: 'Neutral-',
    data: withFaction('neutral', neutral)
  },
  {
    prefix: 'Multiclass-',
    data: withFaction('multiclass', multiclass)
  }
]
