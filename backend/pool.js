const { Pool } = require("pg");
const databaseConfig = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kuis",
  port: "5432",
});

module.exports = databaseConfig;
