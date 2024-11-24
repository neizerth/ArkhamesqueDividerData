import { IArkhamesqueBuild } from '@/types';
import stories from './stories';
import player from './player';

const build: IArkhamesqueBuild = {
  prefix: 'ACHD-',
  stories,
  player
}

export default build;