<template>
  <div>
    <h1>User: <small>{{ user.name }}</small></h1>
    <hr>
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
import Chat from '@/components/Chat.vue'
import UserList from '@/components/UserList.vue'
import wsService from '@/services/websocketService'

export default {
  name: 'MessagesView',
  components: {
    Chat,
    UserList
  },
  data() {
    return {
      user: wsService.instance.user
    };
  }
}
</script>
