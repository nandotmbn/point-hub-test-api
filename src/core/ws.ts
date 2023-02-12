import { http } from './http';
import { Server, Socket } from 'socket.io';

const io = new Server(http, {
  cors: { origin: '*' }
});

let interval: number;

function WebSocket() {
  io.on('connection', (socket: Socket) => {
    console.log(`${socket.id} is connected`);
    socket.on('disconnect', () => {
      clearInterval(interval);
    });
  });

  console.log("[socket]: SocketIO is initialized")
}

export default WebSocket;
