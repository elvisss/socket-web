import openSocket from 'socket.io-client';

export default class WebsocketService {
  static _instance;
  socket;
  socketStatus = false;

  constructor() {
    this.socket = openSocket(process.env.VUE_APP_WSURL);
    this.checkStatus();
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new WebsocketService();
    }
    return this._instance;
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('connected');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('disconnect');
      this.socketStatus = false;
    });
  }

  emit(evento, payload, callback) {
    console.log('emitting...', evento);
    this.socket.emit(evento, payload, callback);
  }

  listen(evento, cb) {
    this.socket.on(evento, (payload) => {
      cb(payload);
    });
  }
}
