import wsSocket from '../services/websocketService';

export const userGuard = (_to, _from, next) => {
  const socket = wsSocket.instance;
  if (socket.getUser()) {
		next();
  } else {
    next('/');
	}
};
