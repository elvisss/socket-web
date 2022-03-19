<template>
  <footer class="p-2 bg-dark text-white text-end">
    Server status:
		<span v-if="wsStatus" class="text-success">Online</span>
		<span v-else class="text-danger">Offline</span>
  </footer>
</template>

<script>
import wsService from '@/services/webSocketService'

export default {
	name: 'Footer',
	data() {
		return {
			socket: wsService.instance
		}
	},
	computed: {
		wsStatus() {
			return this.socket.socketStatus;
		}
	}
};
</script>

<style scoped>
footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
}
</style>
