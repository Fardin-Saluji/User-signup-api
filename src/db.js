const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT
    )
  `);

  db.run(`
    CREATE TABLE email_outbox (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      email TEXT,
      status TEXT,
      retry_count INTEGER,
      last_error TEXT
    )
  `);
});

module.exports = db;

