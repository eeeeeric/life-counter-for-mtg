<template>
  <div class="main">
    <button @click="host()">HOST</button>
    <button @click="$router.push('join')">JOIN</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as LifeSDK from '@/sdk/sdk.ts';

@Component
export default class Main extends Vue {
    public host(): void {
        const uid = this.$store.state.user.uid;
        LifeSDK.createRoom(uid).then((roomId: string) => {
          this.$router.push(`/room/${roomId}/player/${uid}`);
        });
    }
}
</script>
