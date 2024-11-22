import { downloadImages } from "@/tasks/downloadImages";
import { mkDir } from "./util/fs";
import { CACHE_DIR } from "./config/app";
import { createIndex } from "./tasks/createIndex";

export class App {
  async init() {
    mkDir(CACHE_DIR);
  }
  async run (type?: string) {
    await this.init();

    switch (type) {
      case 'index':
        createIndex();
      break;
      default:
        await downloadImages();
        createIndex();
      break;
    };
  }
}