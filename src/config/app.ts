import path from "path";

export const ROOT_DIR = path.join(__dirname, '../..');
export const CACHE_DIR = path.join(ROOT_DIR, 'cache');
export const CACHED_IMAGES_DIR = path.join(CACHE_DIR, 'images');

export const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;