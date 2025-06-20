import { CACHED_IMAGES_DIR, IMAGES_ASSETS_PASSWORD, IMAGES_ASSETS_URL, IMAGES_ASSETS_USER } from "@/config/app";
import { flattenDir, mkDir } from "@/util/fs";
import fs from "fs";
import decompress from "decompress";
import { Readable } from "stream";
import { writeFile } from "fs/promises";
import { ReadableStream } from "stream/web";

export const downloadImages = async () => {
  mkDir(CACHED_IMAGES_DIR);

	const credentials = `${IMAGES_ASSETS_USER}:${IMAGES_ASSETS_PASSWORD}`
	const hash = btoa(credentials);

	console.log(credentials)

  const { body } = await fetch(IMAGES_ASSETS_URL, {
		headers: {
			Authorization: `Basic ${hash}`
		}
	});

	const filePath = `${CACHED_IMAGES_DIR}/images.zip`;

	const stream = Readable.fromWeb(body as ReadableStream);
	await writeFile(filePath, stream);

	await decompress(filePath, CACHED_IMAGES_DIR);
   flattenDir(CACHED_IMAGES_DIR);
	fs.unlinkSync(filePath);
}

