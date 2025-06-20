import { CACHED_IMAGES_DIR, IMAGES_ASSETS_URL } from "@/config/app";
import { flattenDir, mkDir } from "@/util/fs";
import fs from "fs";
import decompress from "decompress";
import { Readable } from "stream";
import { writeFile } from "fs/promises";
import { ReadableStream } from "stream/web";

export const downloadImages = async () => {
  mkDir(CACHED_IMAGES_DIR);

  const { body } = await fetch(IMAGES_ASSETS_URL);

	const filePath = `${CACHED_IMAGES_DIR}/images.zip`;

	const stream = Readable.fromWeb(body as ReadableStream);
	await writeFile(filePath, stream);

	await decompress(filePath, CACHED_IMAGES_DIR);
   flattenDir(CACHED_IMAGES_DIR);
	fs.unlinkSync(filePath);
}

