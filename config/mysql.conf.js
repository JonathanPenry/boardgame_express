/////////////////
// CONFIG FILE //
/////////////////
// File sets up SQL

/////////////
// IMPORTS //
/////////////
let mysql = require("mysql2");

/////////////////
// SET UP POOL //
/////////////////
const pool = mysql.createPool({
    connectionLimit: 10,
    // Host, user, password, database, port all come from .env file
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

/////////////////////////
// CONNECT TO DATABASE //
/////////////////////////
// Attempt to connect to DB using if statements
pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.error("Database connection was closed.");
      }
      if (err.code === "ER_CON_COUNT_ERROR") {
        console.error("Database has too many connections.");
      }
      if (err.code === "ECONNREFUSED") {
        console.error("Database connection was refused.");
      }
    }
  
    if (connection) connection.release();
    return;
  });


/////////////
// EXPORTS //
/////////////
// This export needs to be imported into each sql file
module.exports = pool.promise();