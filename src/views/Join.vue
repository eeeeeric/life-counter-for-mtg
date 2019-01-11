<template>
  <div class="join">
    <label for="room">Room Code:</label>
    <input type="text" id="room-input" name="room" v-model="roomCode" required>
    <button @click="join()">JOIN</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as LifeSDK from '@/sdk/sdk.ts';

@Component
export default class Join extends Vue {
    private roomCode: string = '';

    public join(): void {
      const uid = this.$store.state.user.uid;
      LifeSDK.joinRoom(uid, this.roomCode);
      this.$router.push(`/room/${this.roomCode}/player/${uid}`);
    }
}
</script>
