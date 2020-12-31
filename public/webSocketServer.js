const { on } = require('process');
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3003});

console.log('running');

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
    console.log('connected');
    ws.send('Hi');
})