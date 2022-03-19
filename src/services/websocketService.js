import openSocket from 'socket.io-client';
import User from '@/classes/user';

export default class WebsocketService {
  static _instance;
  socket;
  socketStatus = false;
  user;

  constructor() {
    this.socket = openSocket(process.env.VUE_APP_WSURL);
    this.loadStorage();
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
      this.loadStorage();
    });

    this.socket.on('disconnect', () => {
      console.log('disconnected');
      this.socketStatus = false;
    });
  }

  getUser() {
    return this.user;
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

  loginWS(name) {
    return new Promise((resolve) => {
      this.emit('config-user', { name }, (resp) => {
        console.log(resp);
        this.user = new User(name);
        this.saveStorage();
        resolve();
      });
    });
  }

  logoutWS() {
    this.user = null;
    localStorage.removeItem('user');
    const payload = {
      name: 'empty',
    };
    this.emit('config-user', payload, () => {
      console.log('user removed');
    });
  }

  saveStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage() {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      this.user = JSON.parse(userStorage);
      this.loginWS(this.user.name);
    }
  }
}
