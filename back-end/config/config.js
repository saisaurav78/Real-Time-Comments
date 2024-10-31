import dotenv from 'dotenv'
dotenv.config()
import mysql from 'mysql2'
const connection = mysql.createConnection({
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Db,
  host: process.env.Host,
  port: process.env.Db_PORT,
});

export default connection