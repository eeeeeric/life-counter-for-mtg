<template>
  <div class="room">
    <h1>This is room <router-link :to="`/room/${$route.params.room_id}`">{{ $route.params.room_id }}</router-link>.</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Player from '@/components/Player.vue';
import * as LifeSDK from '@/sdk/sdk.ts';

@Component({
    components: {
        Player,
    },
})
export default class Room extends Vue {
  public created(): void {
    this.$store.commit('setActiveRoom', this.$route.params.room_id);
    LifeSDK.listenToRoom(this.$route.params.room_id, (data) => {
        this.$store.commit('onRoomUpdated', data);
    });
  }
}
</script>
