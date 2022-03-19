import wsService from '@/services/websocketService';

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
}
