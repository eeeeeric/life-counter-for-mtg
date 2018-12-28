<template>
  <div class="home">
    <img alt="Life Counter for MTG Logo" src="../assets/logo.png">
    <div v-if="$store.state.logged_in">
      <img v-bind:src="$store.state.user.photoURL" width="100px" height="100px" />
      <h1>You are logged in {{ $store.state.user.displayName }}</h1>
      <h2>{{ $store.state.user.email }}</h2>
      <button @click="logOut">Log Out</button>
    </div>
    <div v-else>
      <h1>Welcome to Life Counter for MTG!</h1>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '@/firebase';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  public login() {
    this.$router.push('auth');
  }
  public logOut() {
    firebase.auth().signOut();
  }
}
</script>
