

<template>
  <div :class="bemm()">
    <div :class="bemm('tools')">
      <Form>
        <InputNumber label="Windows" v-model="windows"></InputNumber>
        <InputColor label="Balcony color" v-model="color"></InputColor>
        <InputColor label="Wall color" v-model="wall"></InputColor>
      </Form>
    </div>
    <div :class="bemm('wall')" :style="`--wall: ${wall}`">
      <Balcony></Balcony>
    </div>
  </div>
</template>

<script setup lang="ts">
import Balcony from './components/Balcony.vue';
import { useBalcony } from './composables/useBalcony';
import { InputNumber, InputColor, Form } from '@/components/form';

const { windows, color, wall } = useBalcony();



import { useBemm } from 'bemm';
const bemm = useBemm('app');
</script>

<style lang="scss">
.app {



  &__wall {
    --dark-wall: color-mix(in oklch, var(--wall) 100%, black 25%);
    width: 100vw;
    height: 100vh;
    // background-color: var(--wall);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(ellipse at center, var(--wall) 50%, var(--dark-wall) 100%);

    @media screen and (width <=768px) {
      height: 100vw;
      width: 100vw;
    }
  }

  &__tools {
    position: absolute;
    right: 1em;
    top: 1em;
    display: flex;
    flex-direction: column;
    padding: 1em;
    border-radius: .25em;
    background-color: rgb(var(--dark-rgb), .75);
    color: var(--light);
    width: 10em;

    @media screen and (width <=768px) {
      position: static;
      width: 100%;
    }
  }

  @media screen and (width <=768px) {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>