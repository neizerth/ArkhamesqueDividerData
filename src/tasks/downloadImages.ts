import { getGoogleDriveFile } from "@/components/googleDrive/getGoogleDriveFile";
import { getGoogleDriveFolderContents } from "@/components/googleDrive/getGoogleDriveFolderContents"
import { CACHED_IMAGES_DIR, GOOGLE_DRIVE_FOLDER_ID } from "@/config/app";
import { delay } from "@/util/common";
import { mkDir } from "@/util/fs";
import { drive_v3 } from "@googleapis/drive";
import path from "path";
import fs from "fs";

export const downloadImages = async () => {
  mkDir(CACHED_IMAGES_DIR);

  await delay(100);
  const contents = await getGoogleDriveFolderContents(GOOGLE_DRIVE_FOLDER_ID);

  for (const file of contents) {
    await downloadSingleImage(file);
  }
}

export const downloadSingleImage = async (file: drive_v3.Schema$File) => {
  const { name } = file;
  
  const filePath = path.join(CACHED_IMAGES_DIR, name);
  const stream = fs.createWriteStream(filePath);

  await delay(100);
  await getGoogleDriveFile({
    ...file,
    stream
  });
  
} 