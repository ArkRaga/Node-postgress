import { config, get_dev_config } from "./config_reader";
import { get_defualt_client } from "./db_client";

(async () => {
  await preload();
  await init();
  await after_init();
})();
async function preload() {
  await get_dev_config();
}
async function init() {}
async function after_init() {
  let client = await get_defualt_client();
  const result = await client.query("select now()");
  console.log(result.rows);
}
