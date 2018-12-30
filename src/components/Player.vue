<template>
  <div class="player">
    <LifeTotal />
    <Counters />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LifeTotal from '@/components/LifeTotal.vue';
import Counters from '@/components/Counters.vue';

@Component({
    components: {
        LifeTotal,
        Counters,
    }
})
export default class Player extends Vue {
}
</script>