
# IDChat

IDChat is a real-time chat application built using React for the frontend, Socket.IO for real-time communication, and Express for the backend server. This is a learning project that inspired by [WebDevSimplified](https://github.com/WebDevSimplified) to create a simple chat application where users can send and receive messages instantly.


## Features

- Real-time messaging
- User-specific chat rooms



## Tech Stack

**Frontend:** React, React Bootstrap

**Backend:** Express, Socket.IO

**Styling:** Bootstrap


## Getting Started

- Make sure you have Node.js and npm installed

1. Clone the repository:
```bash
    git clone https://github.com/yourusername/IDChat.git
    cd IDChat
```

2. Install dependencies for the backend:
```bash
    cd server
    npm install
```

3. Install dependencies for the frontend
```bash
    cd ../client
    npm install
```

- Run the Application

1. Start the backend server:
```bash
    cd server
    npm Start
```
The backend server will start on http://localhost:5001

2. Start the frontend Application
```bash
    cd ../client
    npm start
```
The frontend application will start on http://localhost:3000




## Project Structure
```
IDChat/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── contexts/       # Context providers
│       ├── App.js
│       └── index.js
├── server/                 # Express backend
│   ├── server.js
│   └── ...
├── README.md
└── package.json
```

**Backend Configuration:** The backend server is configured to use CORS to allow requests from the frontend

**Frontend Configuration** The frontend application is built using React and communicates with the backend server using Socket.IO. The main configuration for the Socket.IO client can be found in [SocketProvider.js](https://github.com/leonaurdo/IDChat/blob/main/client/client/src/contexts/SocketProvider.js).


## Acknowledgements

 - [Video tutorial by Web Dev Simplified](https://www.youtube.com/watch?v=tBr-PybP_9c)
 - [React](https://react.dev/)
 - [React Bootstrap](https://react-bootstrap.netlify.app/)


