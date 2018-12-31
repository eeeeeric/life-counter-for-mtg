<template>
  <div class="home">
    <img alt="Life Counter for MTG Logo" src="../assets/logo.png">
    <h2>Life Counter for MTG</h2>
    <router-link to="requires-auth">Requires Auth</router-link>
    <Profile />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Profile from '@/components/Profile.vue';

@Component({
  components: {
    Profile,
  },
})
export default class Home extends Vue {
}
</script>
