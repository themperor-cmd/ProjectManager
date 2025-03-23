const pg = require('pg');

const db = new pg.Client(
    {
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: 'localhost',
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE,
    }
)

db
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Database Connection Error:", err));

module.exports = db;