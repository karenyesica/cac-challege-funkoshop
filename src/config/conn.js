const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DBPASS,
  database: process.env.DB,
  port: process.env.PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log("Hubo un error al conectar a la BBDD: " + err);
  } else {
    console.log("Conexión a la BBDD exitosa");
    conn.release();
  }
});

module.exports = {
  conn: pool.promise(),
};
