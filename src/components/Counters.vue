<template>
  <div class="counters">
    <div class="counter-control poison">
        <button class="decrease-counter" @click="decreaseCounter('poison')">-</button>
        <div class="counter-total">
            <img class="img" src="@/assets/counters/tsom-10-poison-counter.png" />
            <h1 class="count">{{getCounterTotal('poison')}}</h1>
        </div>
        <button class="increase-counter" @click="increaseCounter('poison')">+</button>
    </div>
    <div class="counter-control energy">
        <button class="decrease-counter" @click="decreaseCounter('energy')">-</button>
        <div class="counter-total">
            <img class="img" src="@/assets/counters/tkld-13-energy-reserve.png" />
            <h1 class="count">{{getCounterTotal('energy')}}</h1>
        </div>
        <button class="increase-counter" @click="increaseCounter('energy')">+</button>
    </div>
    <div class="counter-control experience">
        <button class="decrease-counter" @click="decreaseCounter('experience')">-</button>
        <div class="counter-total">
            <img class="img" src="@/assets/counters/tcm2-19-experience-counter.png" />
            <h1 class="count">{{getCounterTotal('experience')}}</h1>
        </div>
        <button class="increase-counter" @click="increaseCounter('experience')">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '@/firebase';

@Component
export default class Counters extends Vue {
  public poison: number = 0;
  public energy: number = 0;
  public experience: number = 0;

  public getCounterTotal(type: string): number {
      switch (type) {
        case 'poison': {
            return this.poison;
        }
        case 'energy': {
            return this.energy;
        }
        case 'experience': {
            return this.experience;
        }
        default: {
            throw new Error('Unrecognized type: ' + type);
        }
    }
  }

  public decreaseCounter(type: string): void {
    switch (type) {
        case 'poison': {
            this.poison -= 1;
            break;
        }
        case 'energy': {
            this.energy -= 1;
            break;
        }
        case 'experience': {
            this.experience -= 1;
            break;
        }
        default: {
            throw new Error('Unrecognized type: ' + type);
        }
    }
  }

  public increaseCounter(type: string): void {
    switch (type) {
        case 'poison': {
            this.poison += 1;
            break;
        }
        case 'energy': {
            this.energy += 1;
            break;
        }
        case 'experience': {
            this.experience += 1;
            break;
        }
        default: {
            throw new Error('Unrecognized type: ' + type);
        }
    }
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