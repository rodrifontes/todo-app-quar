export async function initializeDatabase(database) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      done BOOLEAN DEFAULT FALSE,
      create_date TIMESTAMP DEFAULT (datetime('now','localtime'))
    );
    `);
}