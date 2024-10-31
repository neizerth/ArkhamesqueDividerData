import { downloadImages } from "@/tasks/downloadImages";
import { mkDir } from "./util/fs";
import { CACHE_DIR } from "./config/app";

export class App {
  async init() {
    mkDir(CACHE_DIR);
  }
  async run () {
    await this.init();
    await downloadImages();
  }
}