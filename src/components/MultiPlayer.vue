<template>
  <div class="multi-player">
    <Player v-for="player in $store.state.room" :key="player.uid" 
      :playerName="player.uid" :life="player.life" :uid="player.uid" />
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
export default class MultiPlayer extends Vue {
}
</script>
