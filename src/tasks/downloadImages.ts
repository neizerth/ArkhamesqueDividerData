import { getGoogleDriveFile } from "@/components/googleDrive/getGoogleDriveFile";
import { getGoogleDriveFolderContents } from "@/components/googleDrive/getGoogleDriveFolderContents"
import { CACHED_IMAGES_DIR, GOOGLE_DRIVE_FOLDER_ID } from "@/config/app";
import { delay, retry } from "@/util/promise";
import { flattenDir, mkDir } from "@/util/fs";
import { drive_v3 } from "@googleapis/drive";
import path from "path";
import fs, { unlink } from "fs";
import decompress from "decompress";

export const downloadImages = async () => {
  mkDir(CACHED_IMAGES_DIR);

  await delay(100);
  const contents = await getGoogleDriveFolderContents(GOOGLE_DRIVE_FOLDER_ID);

  for (const file of contents) {
    const { name } = file;
    const isZip = name.endsWith('.zip');

    if (!isZip) {
      continue;
    }

    const filePath = await downloadSingle(file);

    await decompress(filePath, CACHED_IMAGES_DIR);
    fs.unlinkSync(filePath);
  }

  flattenDir(CACHED_IMAGES_DIR);
}

export const downloadSingle = async (file: drive_v3.Schema$File) => {
  const { name } = file;
  
  const filePath = path.join(CACHED_IMAGES_DIR, name);
  const stream = fs.createWriteStream(filePath);

  await delay(100);
  await getGoogleDriveFile({
    ...file,
    stream
  });

  stream.close();

  return filePath;
} 