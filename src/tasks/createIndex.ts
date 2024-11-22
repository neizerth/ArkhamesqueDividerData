import data from '@/data';
import { CACHE_DIR } from '@/config/app';
import { createJSONWriter } from '@/util/fs';

export const createIndex = () => {
  const save = createJSONWriter(CACHE_DIR);

  save('data', data);
}