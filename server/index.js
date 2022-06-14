import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { handler } from '../build/handler.js';

const hostname = '0.0.0.0'
const port = process.env.PORT || 3000;
const app = express();
const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
	socket.on('playMusic', (music) => {
		io.emit('setMusic', music);
	});
});

app.use(handler);
server.listen(port, hostname);
