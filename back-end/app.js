import express from 'express';
import loginRoute from './routes/loginRoute.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'; // Import dotenv
import connection from './config/config.js';
import session from 'express-session';

dotenv.config(); // Initialize dotenv to load environment variables

const app = express();
const port = process.env.PORT || 3001;

// Middleware...
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000, 
      secure: false,  
      httpOnly: true,
      sameSite: 'lax',
    },
  })
);

try {
  connection.connect(() => {
    console.log('connected to db');
  });
  
} catch (error) {
  console.log('error occured in connection', error)
}

// Routes...
app.use('/api/login', loginRoute);


// Starting Server...
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

