<template>
  <div>
    <h2>Users</h2>
    <hr />
    <ul class="list-group">
      <li v-for="user of users" :key="user.id" class="list-group-item">
        {{ user.name }}
        <span class="badge bg-primary">{{ user.room }}</span>
        <span class="badge bg-info">{{ user.id }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import chatService from '@/services/chatService';
import wsService from '@/services/webSocketService';

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      socket: wsService.instance,
      chatService: new chatService(),
    };
  },
  created() {
    /* const json = await fetch('http://localhost:3000/users/detail');
    this.users = (await json.json()).clients; */
    this.chatService.getActiveUsers((users) => {
      console.log(users);
      this.users = users;
    });

    this.chatService.emitGetUsers();
  },
};
</script>

<style scoped lang="scss"></style>
