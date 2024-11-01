import express from 'express';
import loginRoute from './routes/loginRoute.js';
import commentRoute from './routes/commentRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import session from 'express-session';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// Socket.IO setup
const server = http.createServer(app); // Create server using the app
export const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for new comments
  socket.on('sendComment', (newComment) => {
    // Emit the new comment to all other connected clients
    socket.broadcast.emit('newComment', newComment);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
// Middleware setup
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
  }),
);

// Routes
app.use('/api/login', loginRoute);
app.use('/api/comments', commentRoute);

// Starting the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
