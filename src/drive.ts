import * as google from '@googleapis/drive';
import { GOOGLE_API_KEY } from './config/app';
export const service = google.drive({
  version: 'v3',
  auth: GOOGLE_API_KEY
});

