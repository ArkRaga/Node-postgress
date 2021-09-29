import { Client, ClientConfig } from "pg";
import { config } from "./config_reader";

async function get_client(config: ClientConfig): Promise<Client> {
  const client = new Client(config);
  await client.connect();
  return client;
}

export async function get_defualt_client(): Promise<Client> {
  const pg_config: ClientConfig = {
    user: config.database_user,
    password: config.database_password,
    host: config.database_host,
    port: config.database_port,
    database: config.database_name,
  };
  return get_client(pg_config);
}
