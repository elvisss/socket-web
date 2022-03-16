import wsService from '@/services/websocketService';

export default class ChatService {
  constructor() {
    this.ws = wsService.instance;
  }

  sendMessage(mensaje) {
    const payload = {
      de: 'Elvis',
      cuerpo: mensaje,
    };

    this.ws.emit('message', payload);
  }
}
