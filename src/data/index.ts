import { IArkhamesqueBuild } from '@/types';
import stories from './stories';
import player from './player';
import investigators from './investigators'

const build: IArkhamesqueBuild = {
  prefix: 'ACHD-',
  stories,
  player,
  investigators
}

export default build;