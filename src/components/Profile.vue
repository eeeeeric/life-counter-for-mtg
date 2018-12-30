<template>
  <div>
    <div v-if="$store.state.logged_in" class="profile">
      <div class="profile-picture">
        <img :src="$store.state.user.photoURL" alt="Profile image" width="80px">
      </div>
      <div class="profile-name">{{ $store.state.user.displayName }}</div>
      <div class="profile-email">{{ $store.state.user.email }}</div>
      <div class="profile-action">
        <button type="primary" @click="logOut">Log Out</button>
      </div>
    </div>
    <div v-else class="profile">
      <div class="profile-picture">
        <img src="../assets/logo.png" alt="Profile image" width="90px">
      </div>
      <div class="profile-name">Anonymous</div>
      <div class="profile-email">user@localhost</div>
      <div class="profile-action">
        <button type="primary" @click="login">Login</button>
      </div>
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
export default class Profile extends Vue {
  public login() {
    this.$router.push('auth');
  }
  public logOut() {
    firebase.auth().signOut();
  }
}
</script>

<style scoped>
.profile {
  display: grid;
  grid-gap: 10px;
  border: 2px solid #2c1ef1;
  border-radius: 5px;
  width: 390px;
  grid-template-columns: 90px 290px;
  grid-template-rows: 40px 40px 40px;
  grid-template-areas:
        "picture name"
        "picture email"
        "logout logout";
}

.profile-picture {
  grid-area: picture;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-name { 
  grid-area: name;
}
.profile-email {
  grid-area: email;
  
}
.profile-action {
  grid-area: logout;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
