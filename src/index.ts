import 'dotenv/config';
import { App } from "@/App";

const app = new App;
const type = process.argv[2];
console.log(process.env);

app.run(type);