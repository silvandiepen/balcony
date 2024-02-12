

<template>
  <div :class="bemm()">
    <div :class="bemm('tools')">
      <Form>
        <InputRange label="Windows" v-model="windows" :min="1" :max="6"></InputRange>
        <InputColor label="Balcony color" v-model="color" :suggestions="balconySuggestions"></InputColor>
        <InputColor label="Wall color" v-model="wall" :suggestions="wallSuggestions"></InputColor>
      </Form>
    </div>
    <div :class="bemm('wall')" :style="`--wall: ${wall}`">
      <div :class="bemm('background')">
        <Limestone></Limestone>
      </div>
      <Balcony :class="bemm('balcony')" ></Balcony>
    </div>
  </div>
</template>

<script setup lang="ts">
import Balcony from './components/Balcony.vue';
import Limestone from "@/components/background/Limestone.vue";
import { useBalcony } from './composables/useBalcony';
import { InputRange, InputColor, Form } from '@/components/form';

const { windows, color, wall } = useBalcony();


const wallSuggestions = [
  '#ffe7b3',
  '#a38443',
  '#f5f0e6',
  '#ffed7a'
]

const balconySuggestions = [
  '#20bfdf',
  '#054394',
  '#016007',
  '#f4dba4'
]

import { useBemm } from 'bemm';
const bemm = useBemm('app');
</script>

<style lang="scss">
.app {



  &__wall {
    --dark-wall: color-mix(in oklch, var(--wall) 100%, black 25%);
    --light-wall: color-mix(in oklch, var(--wall) 100%, white 25%);
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
    width: 15em;
    z-index: 4;

    @media screen and (width <=768px) {
      background-color: rgb(var(--dark-rgb), 1);
      position: static;
      width: 100%;
      border-radius: 0em;
    }
  }

  @media screen and (width <=768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  &__background {
    width: 100%;
    height: 100%;
    
    position: absolute;
    left: 0;
    top: 0;
    svg{ 
      path{
        fill: var(--dark-wall);
      }
      .hole{
        fill: var(--wall);
      }
    }
  }
  &__balcony{
    z-index: 5;
  }
}</style>