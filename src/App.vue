<template>
  <layout-content>
    <router-view></router-view>
  </layout-content>
</template>

<script>
import chatService from '@/services/chatService';
import LayoutContent from '@/layouts/Content.vue'
import wsService from '@/services/webSocketService'

export default {
  components: {
    LayoutContent
  },
  data() {
		return {
			socket: wsService.instance,
      chatService: new chatService(),
		}
	},
  created() {
    this.chatService.getPrivateMessages((message) => {
      console.log({ message });
      /* this.messages.push(message); */
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
