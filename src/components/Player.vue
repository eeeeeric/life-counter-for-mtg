<template>
  <div class="player">
    <LifeTotal v-if="this.$store.state.room[getUID]" :room="getRoom" :playerName="getPlayerName" :lifeTotal="getLife" :readOnly="false" />
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

    get getUID(): string {
        return this.uid || this.$route.params.player;
    }

    get getPlayerName(): string {
        return this.getUID;
    }

    get getLife(): number {
        return this.life || this.$store.state.room[this.getUID].life;
    }

    public getOpponents(): any[] {
        return [];
    }
}
</script>