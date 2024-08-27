const express = require('express')
const http = require('http')
const cors = require('cors')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)

// use cors middleware
app.use(cors({
    origin: 'http://localhost:3000' // allow only this origin
}))

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on('connection', socket => {
    const id = socket.handshake.query.id;
    socket.join(id);
  
    socket.on('send-message', ({ recipients, text }) => {
      recipients.forEach(recipient => {
        const newRecipients = recipients.filter(r => r !== recipient);
        newRecipients.push(id);
        socket.broadcast.to(recipient).emit('receive-message', {
          recipients: newRecipients, sender: id, text
        });
      });
    });
  });
  
server.listen(5001, () => {
    console.log('Server is running on port 5001');
});