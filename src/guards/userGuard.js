import wsSocket from '@/services/webSocketService';

export const userGuard = (_to, _from, next) => {
  const socket = wsSocket.instance;
  if (socket.getUser()) {
		next();
  } else {
    next('/');
	}
};
