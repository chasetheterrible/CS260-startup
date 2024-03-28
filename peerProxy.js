const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
    const wss = new WebSocketServer({ noServer: true});

    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });
    
    let connections = []
    wss.on('connection', (ws) => {
        const connection = { id: uuid.v4(), alive: true, ws:ws };
    })
}