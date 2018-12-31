<template>
  <div class="player">
    <LifeTotal />
    <Counters />
    <CommanderDamage v-for="opponent in opponents" v-bind:key="opponent" v-bind:opponentProp="opponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '@/firebase';
import LifeTotal from '@/components/LifeTotal.vue';
import Counters from '@/components/Counters.vue';
import CommanderDamage from '@/components/CommanderDamage.vue';

@Component({
    components: {
        LifeTotal,
        Counters,
        CommanderDamage,
    },
})
export default class Player extends Vue {
    public opponents: string[] = [ 'day9', 'dayZ' ];
}
</script>