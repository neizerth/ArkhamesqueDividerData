import path from "path";

export const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const ROOT_DIR = path.join(__dirname, '../..');
export const CACHE_DIR = path.join(ROOT_DIR, 'cache');
export const CACHED_IMAGES_DIR = path.join(CACHE_DIR, 'images');