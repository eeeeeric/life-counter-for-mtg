<template>
  <div class="life-total">
    <h2 class="player-name">{{playerName}}</h2>
    <div class="life-control">
        <button class="decrease-life" @click="decreaseLife">-</button>
        <h1 class="player-life-total">{{lifeTotal}}</h1>
        <button class="increase-life" @click="increaseLife">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '@/firebase';

@Component
export default class LifeTotal extends Vue {
  playerName: string = 'Anonymous Player';
  lifeTotal: number = 40;

  decreaseLife(): void {
    this.lifeTotal -= 1;
  }

  increaseLife(): void {
      this.lifeTotal += 1;
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