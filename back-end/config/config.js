import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createPool({
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Db,
  host: process.env.Host,
  port: process.env.Db_PORT,
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0, 
});

connection.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to Database');
  }
});

export default connection;
