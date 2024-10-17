import { DB } from "./db";

export const CreateTable = (db: DB) => {
  db.exec(`
        CREATE TABLE IF NOT EXISTS students (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL`);
};
