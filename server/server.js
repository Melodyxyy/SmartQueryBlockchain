const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (socket) => {
  console.log('Client connected');

  // Listen for messages from the client
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Send a response back to the client
    socket.send(`Server received: ${message}`);
  });

  // Handle socket closing
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit('connection', socket, request);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`WebSocket server listening on port ${PORT}`);
});
