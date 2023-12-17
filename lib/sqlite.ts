import sqlite3 from "sqlite3";

let dbInstance: sqlite3.Database | null = null;

export default function getDatabase(): sqlite3.Database {
  if (!dbInstance) {
    dbInstance = new sqlite3.Database(
      "myDatabase.db",
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("database. created");
        }
      }
    );
    console.log("Creating table...");
    dbInstance.run(`
  CREATE TABLE IF NOT EXISTS FeatureUsage (
    Day DATE,
    Age TEXT,
    Gender TEXT,
    A INTEGER,
    B INTEGER,
    C INTEGER,
    D INTEGER,
    E INTEGER,
    F INTEGER
  )
`);
  } else {
    console.log("Database already exists");
  }
  return dbInstance;
}
