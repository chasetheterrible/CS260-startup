const GameEvent = {
    System: 'system',
    End: 'gameEnd',
    Start: 'gameStart',
};

class EventMessage {
    constructor(from, type, value) {
        this.from = from
        this.type = type;
        this.value = value;
    }
}

class GameEventNotifier {
    events = [];
    handlers = [];
}

    function constructor() {
        let port = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage('PairedUp', GameEvent.System, { msg: 'connected' }));
        };
    }