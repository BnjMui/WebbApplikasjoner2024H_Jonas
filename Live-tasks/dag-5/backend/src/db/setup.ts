import { DB } from "./db";
import { CreateTable } from "./tables";

export const setup = async (db: DB) => {
  await CreateTable(db);
};
