<template>
  <div class="life-total">
    <router-link :to="`/room/${room}/player/${playerName}`"><h2 class="player-name">{{ playerName }}</h2></router-link>
    <div class="life-control">
        <button v-if="!readOnly" class="decrease-life" @click="decreaseLife">-</button>
        <h1 class="player-life-total">{{ lifeTotal }}</h1>
        <button v-if="!readOnly" class="increase-life" @click="increaseLife">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as LifeSDK from '@/sdk/sdk.ts';

@Component
export default class LifeTotal extends Vue {
  @Prop({ type: String, default: 'Anonymous Player' })
  public playerName!: string;

  @Prop({ type: Number })
  public lifeTotal!: number;

  @Prop({ type: String })
  public room!: string;

  @Prop({ type: Boolean })
  public readOnly!: boolean;

  public decreaseLife(): void {
    LifeSDK.setLife(this.room, this.playerName, this.lifeTotal - 1);
  }

  public increaseLife(): void {
    LifeSDK.setLife(this.room, this.playerName, this.lifeTotal + 1);
  }
}
</script>

<style scoped>
.life-control {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
        "decrease-life life-total increase-life";
}

.decrease-life {
  grid-area: decrease-life;
  align-items: center;
  justify-content: center;
}
.increase-life {
  grid-area: increase-life;
  align-items: center;
  justify-content: center;
}
.player-life-total { 
  grid-area: life-total;
}
</style>