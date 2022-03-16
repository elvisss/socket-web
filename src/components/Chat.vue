<template>
  <div>
    <h1>Messages</h1>
    <hr />

    <form @submit.prevent="submit">
      <input
        autofocus
        autocomplete="off"
        name="text"
        class="form-control"
        type="text"
        v-model="text"
      />
    </form>
  </div>
</template>

<script>
import chatService from '@/services/chatService';

export default {
  name: 'Chat',
  data() {
    return {
      text: '',
      chatService: new chatService(),
    };
  },
  created() {
    this.chatService.getMessages((message) => {
      console.log({ message });
    })
  },
  methods: {
    submit() {
      this.chatService.sendMessage(this.text);
      this.text = '';
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
