<template>
  <div class="commander-damage">
    <h2>{{opponent}}</h2>
    <div class="counter-control">
        <button class="decrease-counter" @click="decreaseDamage">-</button>
        <div class="counter-total">
            <img class="img" src="@/assets/Power.svg" />
            <h1 class="count">{{damage}}</h1>
        </div>
        <button class="increase-counter" @click="increaseDamage">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from '@/firebase';

@Component
export default class CommanderDamage extends Vue {
  @Prop() public opponentProp!: string;
  public opponent: string = this.opponentProp;
  public damage: number = 0;

  public decreaseDamage(): void {
      this.damage -= 1;
  }

  public increaseDamage(): void {
      this.damage += 1;
  }
}
</script>

<style scoped>
.counter-control {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px;
  grid-template-areas:
        "decrease-counter counter-total increase-counter";
}

.decrease-counter {
  grid-area: decrease-counter;
  align-items: center;
  justify-content: center;
}
.increase-counter {
  grid-area: increase-counter;
  align-items: center;
  justify-content: center;
}
.counter-total { 
  grid-area: counter-total;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: 50px 50px;
  grid-template-rows: inherit;
  grid-template-areas: "img count";
  align-items: center;
  justify-content: center;
}
.img {
    grid-area: img;
}
.count {
    grid-area: count;
}

img {
    height:100%
}
</style>