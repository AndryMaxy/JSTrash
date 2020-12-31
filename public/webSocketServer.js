const { on } = require('process');
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3003});

let history = [];

console.log('running');

server.on('connection', ws => {
    console.log('connected');
    ws.on('message', message => {
        history.push(message);
        if (history.length > 100) {
            history = history.slice(1);
        }
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
    if (history.length) {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                history.forEach(msg => {
                    client.send(msg);
                })
            }
        })
    } else {
        ws.send('Hi stranger...');
    }
})