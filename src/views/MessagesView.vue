<template>
  <div>
    <h1>
      User: <small>{{ username }}</small>
    </h1>

    <button type="button" @click="logout" class="btn btn-danger">Logout</button>

    <hr />
    <div class="row">
      <div class="col-6">
        <UserList />
      </div>
      <div class="col-6">
        <Chat />
      </div>
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat.vue';
import UserList from '@/components/UserList.vue';
import wsService from '@/services/webSocketService';

export default {
  name: 'MessagesView',
  components: {
    Chat,
    UserList,
  },
  data() {
    return {
      wsService: wsService.instance,
    };
  },
  methods: {
    logout() {
      this.wsService.logoutWS();
      this.$router.push({ path: '/' });
    },
  },
  computed: {
    username() {
      return this.wsService.user.name;
    },
  },
};
</script>
