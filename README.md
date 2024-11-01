# Real-Time Comments App

A real-time comments application where users can log in and post comments that are instantly visible to all users. This app uses **Next.js** and **Material UI** on the frontend, with a **Node.js** and **Express.js** backend, and **Socket.io** for real-time functionality. **MySQL** is used as the database to store users and comments.

---

## Tech Stack

### Frontend
- **Next.js**: Framework for server-rendered React applications.
- **Material UI**: Component library for styling.

### Backend
- **Node.js** and **Express.js**: Server and API framework.
- **Socket.io**: Enables real-time, bidirectional communication.

### Database
- **MySQL**: Database for storing users and comments.

---

## Features

- User authentication system.
- Real-time comment posting with live updates for all users.
- Responsive design with Material UI components.
- Persistent data storage with MySQL.

---

## Installation

 **Clone the repository:**
   ```bash
   git clone https://github.com/saisaurav78/Real-Time-Comments.git
   cd RealTimeComments
   Frontend:
    cd front-end
    npm install

    Backend:
    cd ../back-end
    npm install

   Create a .env file in the back-end directory and add below Environmental variables for database connectivity: 
    Host=yourhost
    Db_PORT=yourDBport
    Db=yourDB
    User=yourUserName
    Password=yourPassword

   Run npm start in both front-end and back-end directories
   ```

## Usage
Open your browser and navigate to http://localhost:3000 (or your configured port).





