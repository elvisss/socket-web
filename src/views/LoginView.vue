<template>
  <div>
    <h1>Login</h1>
    <hr>
    <div class="row justify-content-center">
      <div class="col-9">
        <form class="p-4" @submit.prevent="enter">
          <input
            type="text"
            v-model="name"
            name="name"
            class="form-control"
            placeholder="Username"
            autofocus
          />

          <button
            type="submit"
            class="btn btn-primary w-100 mt-3"
            :disabled="disabled"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import wsService from '@/services/webSocketService'

export default {
  name: 'LoginView',
  data() {
    return {
      name: '',
      socket: wsService.instance
    };
  },
  methods: {
    async enter() {
      await this.socket.loginWS(this.name);
      this.$router.push({ path: '/messages' });
    },
  },
  computed: {
    disabled() {
      return this.name.trim().length === 0;
    },
  },
};
</script>
