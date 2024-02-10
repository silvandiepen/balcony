

<template>
  <div :class="bemm('tools')">
    <input type="number" v-model="windows">
    <input type="color" v-model="color">
    <input type="color" v-model="wall">

  </div>
  <div :class="bemm('wall')" :style="`--wall: ${wall}`">
    <Balcony></Balcony>
  </div>
</template>

<script setup lang="ts">
import Balcony from './components/Balcony.vue';
import { useBalcony } from './composables/useBalcony';

const { windows, color, wall } = useBalcony();

import { useBemm } from 'bemm';
const bemm = useBemm('app');
</script>

<style lang="scss">

.app{



  &__wall {
  --dark-wall: color-mix(in oklch, var(--wall) 100%, black 25%);
  width: 100vw;
  height: 100vh;
  // background-color: var(--wall);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(ellipse at center, var(--wall) 50%, var(--dark-wall) 100%);

}
  &__tools{
    position: absolute; right: 1em; top: 1em;
    display: flex;
    flex-direction: column;
    padding: 1em; 
    border-radius: .25em;
    background-color: rgba(0,0,0,.75);
  }
}
</style>