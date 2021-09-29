import { Config } from "./models";
import * as fs from "fs";
import * as path from "path";

export let config: Config;

async function read_config(path: string) {
  const file_contents: string = await new Promise((res, rej) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        rej({ err: "could not read path: " + path });
      }
      res(data);
    });
  });
  config = JSON.parse(file_contents.trim());
}

export async function get_dev_config(): Promise<Config> {
  const config_path = path.join(__dirname, "..", "config", "dev.json");
  await read_config(config_path);
  return config;
}
