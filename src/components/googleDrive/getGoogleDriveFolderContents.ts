import * as C from '@/config/app';
import { service } from '@/drive';
import { drive_v3 } from '@googleapis/drive';

export const getGoogleDriveFolderContents = async (parentId: string) => {
  const contents: drive_v3.Schema$File[] = [];
  let pageToken;

  do {
    console.log(`parsing GDrive /${pageToken || 'root'}...`);
    const response = await service.files.list({
      q: `'${parentId}' in parents`,
      pageToken
    });
    const { data } = response;
    const { files = [] } = data;
    contents.push(...files);

    pageToken = data.nextPageToken;

  } while (pageToken);

  return contents;
}