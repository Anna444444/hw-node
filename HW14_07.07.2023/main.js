import express from 'express';
import http from 'http';
import { Server as Io } from "socket.io";
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Io(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    const fname = path.join(process.cwd(), 'index.html');
    res.sendFile(fname);
});

let connections = {};

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    connections[socket.id] = socket;

    io.emit('connections', Object.keys(connections));

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);

        delete connections[socket.id];

        io.emit('connections', Object.keys(connections));
    });

    socket.on('privateMessage', (data) => {
        const { id, message } = data;

        const connectedSocket = connections[id];
        if (connectedSocket) {
            connectedSocket.emit('privateMessage', { from: socket.id, text: message });
        }
    });
});

server.listen(3333, () => {
    console.log('listening on*:3333');
});
