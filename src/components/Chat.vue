<template>
  <div>
    <h1>Messages</h1>
    <hr />

    <div ref="chatMessage" id="chat-messages">
      <ul class="text-start m-0 p-0">
        <li v-for="(message, index) of messages" :key="index" class="list-group-item">
          {{ message.de }}: {{ message.cuerpo }}
        </li>
      </ul>
    </div>

    <form @submit.prevent="submit">
      <input
        autofocus
        autocomplete="off"
        name="text"
        class="form-control mt-4"
        type="text"
        v-model="text"
      />
    </form>
  </div>
</template>

<script>
import chatService from '@/services/chatService';
import Vue from 'vue';

export default {
  name: 'Chat',
  data() {
    return {
      text: '',
      chatService: new chatService(),
      messages: []
    };
  },
  created() {
    this.chatService.getMessages((message) => {
      console.log({ message });
      this.messages.push(message);
      Vue.nextTick(() => {
        this.$refs.chatMessage.scrollTop = this.$refs.chatMessage.scrollHeight;
      });
    })
  },
  methods: {
    submit() {
      if (!this.text.trim()) {
        return;
      }
      this.chatService.sendMessage(this.text);
      this.text = '';
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#chat-messages {
  height: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  overflow-y: auto;
}
</style>
