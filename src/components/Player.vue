<template>
  <div class="player">
    <p>Room {{ getRoom }}</p>
    <LifeTotal :room="getRoom" :playerName="playerName" :lifeTotal="life" />
    <!-- <Counters /> -->
    <!-- <CommanderDamage v-for="opponent in getOpponents()" v-bind:key="opponent.name" v-bind:opponentProp="opponent.name" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from '@/firebase';
import * as _ from 'lodash';
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
    @Prop({ type: String })
    public playerName!: string;

    @Prop({ type: String })
    public uid!: string;

    @Prop({ type: Number })
    public life!: number;

    get getRoom(): string {
        return this.$route.params.room_id;
    }

    public getOpponents(): any[] {
        return [];
    }
}
</script>