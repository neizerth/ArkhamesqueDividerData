import { getDriveService } from "@/drive";
import { drive_v3 } from "@googleapis/drive";
import { WriteStream } from "fs";

export type IGetGoogleDriveFileOptions = drive_v3.Schema$File & {
  stream: WriteStream
}

export const getGoogleDriveFile = async ({
  id,
  name,
  stream
}: IGetGoogleDriveFileOptions) => {

  console.log(`downloading file ${name || id}`);

  const service = await getDriveService();
  const { data } = await service.files.get({
    fileId: id,
    alt: "media",
  }, {
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    data
      .on('end', resolve)
      .on('error', reject)
      .pipe(stream);
  });
}