import wsService from '@/services/webSocketService';

export default class ChatService {
  constructor() {
    this.ws = wsService.instance;
  }

  sendMessage(mensaje) {
    const payload = {
      from: this.ws.getUser().name,
      body: mensaje,
    };

    this.ws.emit('message', payload);
  }

  getMessages(cb) {
    this.ws.listen('new-message', (payload) => {
      cb(payload);
    });
  }

  getPrivateMessages(cb) {
    this.ws.listen('private-message', (payload) => {
      cb(payload);
    });
  }

  getActiveUsers(cb) {
    this.ws.listen('active-users', (payload) => {
      cb(payload);
    });
  }

  emitGetUsers() {
    this.ws.emit('get-users');
  }
}
